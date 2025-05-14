import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import SegmentContent from './SegmentContent/SegmentContent';
import styles from './SwiperTimeline.module.scss';
import { NavigationOptions } from 'swiper/types';
import { Modal } from 'src/app/components/Modal/Modal';
import YearCircle from '@/app/components/YearCircle/YearCircle';

interface Segment {
  startYear: number;
  endYear: number;
  events: { year: number; text: string }[];
}

interface SwiperTimelineProps {
  segments: Segment[];
}

const SwiperTimeline: React.FC<SwiperTimelineProps> = ({ segments }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [navReady, setNavReady] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{ year: number; text: string } | null>(null);

  const handleItemClick = (ev: { year: number; text: string }) => {
    setSelectedEvent(ev);
    setModalVisible(true);
  };

  const currentSegment = segments[activeIndex];

  const handleCircleClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  const onSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const checkScroll = useCallback(() => {
    const el = contentRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth);
  }, []);

  const scrollContent = (direction: 'left' | 'right') => {
    const el = contentRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -550 : 550;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  useEffect(() => {
    checkScroll();
    const el = contentRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [activeIndex, checkScroll]);

  useEffect(() => {
    if (!navReady) return;

    const handlePrev = (e: Event) => {
      if (canScrollLeft) {
        e.stopPropagation();
        scrollContent('left');
      }
    };

    const handleNext = (e: Event) => {
      if (canScrollRight) {
        e.stopPropagation();
        scrollContent('right');
      }
    };

    const prevBtn = prevRef.current;
    const nextBtn = nextRef.current;

    if (prevBtn) prevBtn.addEventListener('click', handlePrev, true);
    if (nextBtn) nextBtn.addEventListener('click', handleNext, true);

    return () => {
      if (prevBtn) prevBtn.removeEventListener('click', handlePrev, true);
      if (nextBtn) nextBtn.removeEventListener('click', handleNext, true);
    };
  }, [canScrollLeft, canScrollRight, navReady]);

  return (
    <div className={styles.swiperTimeline}>
      <div className={styles.bigYears}>
        <span className={styles.startYear}>{currentSegment.startYear}</span>
        <span className={styles.endYear}>{currentSegment.endYear}</span>
      </div>

      <YearCircle
        years={segments.map((_, i) => i)}
        activeYear={activeIndex}
        onSelectYear={handleCircleClick}
        renderDotLabel={(_, index) => `${index + 1}`}
      />

      <div className={styles.sliderWrapper}>
        <div className={styles.pageInfo}>
          {activeIndex + 1}/{segments.length}
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.slidePrevBtn} onClick={() => swiperRef.current?.slidePrev()}>
            {'<'}
          </button>
          <button className={styles.slideNextBtn} onClick={() => swiperRef.current?.slideNext()}>
            {'>'}
          </button>
        </div>

        {canScrollLeft && (
          <div ref={prevRef} className={`swiper-button-prev ${styles.customNav}`}></div>
        )}
        {canScrollRight && (
          <div ref={nextRef} className={`swiper-button-next ${styles.customNav}`}></div>
        )}

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => {
              // нужно для того, чтобы DOM-элементы успели отрисоваться, т.к. prevRef.current и nextRef.current могут быть ещё не доступны.
              if (typeof swiper.params.navigation === 'object') {
                const navigation = swiper.params.navigation as NavigationOptions;
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
                setNavReady(true);
              }
            });
          }}
          onSlideChange={onSlideChange}
          spaceBetween={50}
          slidesPerView={1}
        >
          {segments.map((seg, i) => (
            <SwiperSlide key={`${seg.startYear}-${seg.endYear}`}>
              <SegmentContent
                events={seg.events}
                active={i === activeIndex}
                onClick={handleItemClick}
                contentRef={contentRef}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        {selectedEvent && (
          <>
            <h2>Год: {selectedEvent.year}</h2>
            <p>{selectedEvent.text}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default SwiperTimeline;

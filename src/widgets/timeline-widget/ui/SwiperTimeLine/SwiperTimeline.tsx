import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Modal } from '@/shared/ui';

import SegmentContent from './SegmentContent/SegmentContent';
import styles from './SwiperTimeline.module.scss';
import { YearCircle } from '@/features/year-navigation';

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

    if (el.clientWidth === 0 || el.scrollWidth === 0) {
      return;
    }

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth);
  }, []);

  const scrollContent = (direction: 'left' | 'right') => {
    const el = contentRef.current;
    if (!el) return;
    const base = window.innerWidth <= 768 ? el.clientWidth - 80 : 550;
    const amount = direction === 'left' ? -base : base;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.isBeginning) {
      swiperRef.current.slideTo(segments.length - 1);
    } else {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextPage = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.isEnd) {
      swiperRef.current.slideTo(0);
    } else {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkScroll();
    }, 100);

    const el = contentRef.current;
    if (!el) {
      return () => clearTimeout(timer);
    }

    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      clearTimeout(timer);
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [activeIndex, checkScroll]);

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
          <button className={styles.slidePrevBtn} onClick={handlePrevPage}>
            {'<'}
          </button>
          <button className={styles.slideNextBtn} onClick={handleNextPage}>
            {'>'}
          </button>
        </div>

        {canScrollLeft && (
          <div
            ref={prevRef}
            className="swiper-button-prev"
            onClick={() => scrollContent('left')}
          ></div>
        )}
        {canScrollRight && (
          <div
            ref={nextRef}
            className="swiper-button-next"
            onClick={() => scrollContent('right')}
          ></div>
        )}

        <Swiper
          modules={[]}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
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

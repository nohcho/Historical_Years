import { useCallback, useEffect, useRef, useState } from 'react';

import type { HistoricalEvent, HistoricalSegment } from '@/entities/historical-event';
import { YearCircle } from '@/features/year-navigation';
import { Modal } from '@/shared/ui';

import SegmentContent from './SegmentContent/SegmentContent';
import styles from './SwiperTimeline.module.scss';

interface SwiperTimelineProps {
  segments: HistoricalSegment[];
  labels: {
    closeModal: string;
    closeModalOverlay: string;
    loading: string;
    modalYear: string;
    previousPeriod: string;
    nextPeriod: string;
    scrollLeft: string;
    scrollRight: string;
    getEventAriaLabel: (year: number) => string;
    getPeriodAriaLabel: (period: number) => string;
  };
}

const getNextIndex = (currentIndex: number, length: number) => (currentIndex + 1) % length;

const getPrevIndex = (currentIndex: number, length: number) => (currentIndex - 1 + length) % length;

function SwiperTimeline({ segments, labels }: SwiperTimelineProps) {
  const segmentCount = segments.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  const handleItemClick = (event: HistoricalEvent) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  useEffect(() => {
    if (activeIndex >= segmentCount) {
      setActiveIndex(Math.max(segmentCount - 1, 0));
    }
  }, [activeIndex, segmentCount]);

  const handleCircleClick = (index: number) => {
    setActiveIndex(index);
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

    const base = Math.max(180, Math.min(el.clientWidth - 80, 550));
    const amount = direction === 'left' ? -base : base;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (segmentCount === 0) return;
    setActiveIndex((currentIndex) => getPrevIndex(currentIndex, segmentCount));
  };

  const handleNextPage = () => {
    if (segmentCount === 0) return;
    setActiveIndex((currentIndex) => getNextIndex(currentIndex, segmentCount));
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      checkScroll();
    });

    const el = contentRef.current;
    if (!el) {
      return () => window.cancelAnimationFrame(frame);
    }

    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [activeIndex, checkScroll]);

  if (segmentCount === 0) {
    return null;
  }

  const safeActiveIndex = Math.min(activeIndex, segmentCount - 1);
  const currentSegment = segments[safeActiveIndex];

  return (
    <div className={styles.swiperTimeline}>
      <div className={styles.bigYears}>
        <span className={styles.startYear}>{currentSegment.startYear}</span>
        <span className={styles.endYear}>{currentSegment.endYear}</span>
      </div>

      <YearCircle
        years={segments.map((_, i) => i)}
        activeYear={safeActiveIndex}
        onSelectYear={handleCircleClick}
        renderDotLabel={(_, index) => `${index + 1}`}
        getDotAriaLabel={labels.getPeriodAriaLabel}
      />

      <div className={styles.sliderWrapper}>
        <div className={styles.pageInfo}>
          {safeActiveIndex + 1}/{segmentCount}
        </div>
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={styles.slidePrevBtn}
            onClick={handlePrevPage}
            aria-label={labels.previousPeriod}
          >
            &lt;
          </button>
          <button
            type="button"
            className={styles.slideNextBtn}
            onClick={handleNextPage}
            aria-label={labels.nextPeriod}
          >
            &gt;
          </button>
        </div>

        {canScrollLeft && (
          <button
            type="button"
            className={`${styles.scrollButton} ${styles.scrollPrev}`}
            onClick={() => scrollContent('left')}
            aria-label={labels.scrollLeft}
          >
            &lt;
          </button>
        )}
        {canScrollRight && (
          <button
            type="button"
            className={`${styles.scrollButton} ${styles.scrollNext}`}
            onClick={() => scrollContent('right')}
            aria-label={labels.scrollRight}
          >
            &gt;
          </button>
        )}

        <SegmentContent
          key={`${currentSegment.startYear}-${currentSegment.endYear}`}
          events={currentSegment.events}
          onClick={handleItemClick}
          contentRef={contentRef}
          getEventAriaLabel={labels.getEventAriaLabel}
        />
      </div>
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        closeLabel={labels.closeModal}
        overlayCloseLabel={labels.closeModalOverlay}
        loadingLabel={labels.loading}
      >
        {selectedEvent && (
          <>
            <h2>
              {labels.modalYear}: {selectedEvent.year}
            </h2>
            <p>{selectedEvent.text}</p>
          </>
        )}
      </Modal>
    </div>
  );
}

export default SwiperTimeline;

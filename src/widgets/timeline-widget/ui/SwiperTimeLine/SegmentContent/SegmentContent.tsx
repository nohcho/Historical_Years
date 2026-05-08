import type { RefObject } from 'react';

import type { HistoricalEvent } from '@/entities/historical-event';

import TimelineItem from '../../Timeline/TimelineItem';

import styles from './SegmentContent.module.scss';

interface Props {
  events: HistoricalEvent[];
  onClick: (event: HistoricalEvent) => void;
  contentRef: RefObject<HTMLDivElement | null>;
  getEventAriaLabel: (year: number) => string;
}

function SegmentContent({ events, onClick, contentRef, getEventAriaLabel }: Props) {
  return (
    <div className={styles.slideContent} ref={contentRef}>
      {events.map((event) => (
        <TimelineItem
          key={event.year}
          year={event.year}
          text={event.text}
          onClick={() => onClick(event)}
          ariaLabel={getEventAriaLabel(event.year)}
        />
      ))}
    </div>
  );
}

export default SegmentContent;

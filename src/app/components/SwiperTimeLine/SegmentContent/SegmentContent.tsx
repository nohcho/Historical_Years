import React from 'react';

import styles from './SegmentContent.module.scss';

import TimelineItem from '@/app/components/Timeline/TimelineItem';

interface Props {
  events: { year: number; text: string }[];
  active: boolean;
  onClick: (ev: { year: number; text: string }) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const SegmentContent: React.FC<Props> = ({ events, active, onClick, contentRef }) => (
  <div className={styles.slideContent} ref={active ? contentRef : null}>
    {events.map((ev) => (
      <TimelineItem key={ev.year} year={ev.year} text={ev.text} onClick={() => onClick(ev)} />
    ))}
  </div>
);

export default SegmentContent;

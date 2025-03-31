import React from 'react';
import TimelineItem from './TimelineItem';
import styles from './Timeline.module.scss';

interface TimelineProps {
  currentYear: number;
  data: { year: number; text: string }[];
}

const Timeline: React.FC<TimelineProps> = ({ currentYear, data }) => {
  const items = data.filter((item) => item.year === currentYear);

  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <TimelineItem key={item.year} {...item} />
      ))}
    </div>
  );
};

export default Timeline;

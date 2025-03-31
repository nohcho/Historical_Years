import React from 'react';
import styles from './TimelineItem.module.scss';

interface TimelineItemProps {
  year: number;
  text: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, text }) => {
  return (
    <div className={styles.item}>
      <h4>{year}</h4>
      <p>{text}</p>
    </div>
  );
};

export default TimelineItem;

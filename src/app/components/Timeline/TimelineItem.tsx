import React from 'react';

import styles from './TimelineItem.module.scss';

interface TimelineItemProps {
  year: number;
  text: string;
  onClick?: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, text, onClick }) => {
  return (
    <div onClick={onClick} className={styles.item}>
      <h4>{year}</h4>
      <p>{text}</p>
    </div>
  );
};

export default TimelineItem;

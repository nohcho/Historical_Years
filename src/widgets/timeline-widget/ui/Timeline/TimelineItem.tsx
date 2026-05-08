import type { HistoricalEvent } from '@/entities/historical-event';

import styles from './TimelineItem.module.scss';

interface TimelineItemProps extends HistoricalEvent {
  onClick: () => void;
  ariaLabel: string;
}

function TimelineItem({ year, text, onClick, ariaLabel }: TimelineItemProps) {
  return (
    <button type="button" className={styles.item} onClick={onClick} aria-label={ariaLabel}>
      <h4>{year}</h4>
      <p>{text}</p>
    </button>
  );
}

export default TimelineItem;

import type { HistoricalEvent } from '@/entities/historical-event';

import styles from './TimelineItem.module.scss';

interface TimelineItemProps extends HistoricalEvent {
  onClick: () => void;
}

function TimelineItem({ year, text, onClick }: TimelineItemProps) {
  return (
    <button
      type="button"
      className={styles.item}
      onClick={onClick}
      aria-label={`Открыть событие ${year} года`}
    >
      <h4>{year}</h4>
      <p>{text}</p>
    </button>
  );
}

export default TimelineItem;

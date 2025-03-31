import React from 'react';
import { segmentsData } from '../data/segmentsData';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import SwiperTimeline from '../components/YearSwitcher/SwiperTimeline';
import styles from './HistoryPage.module.scss';

export const HistoryPage = () => {
  return (
    <div className={styles.container}>
      <SectionTitle title="Исторические даты" />
      <SwiperTimeline segments={segmentsData} />
    </div>
  );
};

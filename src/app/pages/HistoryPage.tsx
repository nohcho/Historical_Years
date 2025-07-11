import React, { useContext } from 'react';

import { segmentsData } from '../data/segmentsData';

import styles from './HistoryPage.module.scss';

import SectionTitle from '@/app/components/SectionTitle/SectionTitle';
import SwiperTimeline from '@/app/components/SwiperTimeLine/SwiperTimeline';
import { ThemeContext } from '@/context/ThemeContext';
import ToggleTheme from '@/app/components/ToggleTheme/ToggleTheme';

export const HistoryPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.themeToggleWrapper}>
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      </div>

      <SectionTitle title="Исторические даты" />
      <SwiperTimeline segments={segmentsData} />
    </div>
  );
};

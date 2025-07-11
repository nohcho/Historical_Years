import React, { useContext } from 'react';

import { segmentsData } from '@/shared/config';

import styles from './HistoryPage.module.scss';

import { SectionTitle } from '@/shared/ui';
import { SwiperTimeline } from '@/widgets/timeline-widget';
import { ThemeContext } from '@/app/providers/ThemeContext';
import { ToggleTheme } from '@/features/theme-toggle';

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

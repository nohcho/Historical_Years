import { useContext, useMemo } from 'react';

import { LanguageContext } from '@/app/providers/LanguageContext';
import { ThemeContext } from '@/app/providers/ThemeContext';
import { getLocalizedSegments } from '@/entities/historical-event';
import { LanguageToggle } from '@/features/language-toggle';
import { ToggleTheme } from '@/features/theme-toggle';
import { uiMessages } from '@/shared/config';
import { SectionTitle } from '@/shared/ui';
import { SwiperTimeline } from '@/widgets/timeline-widget';

import styles from './HistoryPage.module.scss';

export const HistoryPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const messages = uiMessages[language];

  const segments = useMemo(() => getLocalizedSegments(language), [language]);

  const timelineLabels = useMemo(
    () => ({
      closeModal: messages.modalCloseLabel,
      closeModalOverlay: messages.modalOverlayCloseLabel,
      loading: messages.loadingLabel,
      modalYear: messages.modalYearLabel,
      previousPeriod: messages.previousPeriodLabel,
      nextPeriod: messages.nextPeriodLabel,
      scrollLeft: messages.scrollLeftLabel,
      scrollRight: messages.scrollRightLabel,
      getEventAriaLabel: messages.eventButtonLabel,
      getPeriodAriaLabel: messages.periodButtonLabel,
    }),
    [messages],
  );

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <LanguageToggle
          language={language}
          ariaLabel={messages.languageToggleLabel}
          onChangeLanguage={setLanguage}
        />
        <ToggleTheme
          theme={theme}
          ariaLabel={messages.themeToggleLabel}
          toggleTheme={toggleTheme}
        />
      </div>

      <SectionTitle title={messages.historyTitle} />
      <SwiperTimeline segments={segments} labels={timelineLabels} />
    </div>
  );
};

export const languages = ['ru', 'en'] as const;

export type Language = (typeof languages)[number];

export interface UiMessages {
  appTitle: string;
  historyTitle: string;
  languageToggleLabel: string;
  themeToggleLabel: string;
  modalCloseLabel: string;
  modalOverlayCloseLabel: string;
  loadingLabel: string;
  previousPeriodLabel: string;
  nextPeriodLabel: string;
  scrollLeftLabel: string;
  scrollRightLabel: string;
  modalYearLabel: string;
  eventButtonLabel: (year: number) => string;
  periodButtonLabel: (period: number) => string;
}

export const languageNames: Record<Language, string> = {
  ru: 'Русский',
  en: 'English',
};

export const uiMessages: Record<Language, UiMessages> = {
  ru: {
    appTitle: 'Исторические даты',
    historyTitle: 'Исторические даты',
    languageToggleLabel: 'Переключить язык',
    themeToggleLabel: 'Переключить тему',
    modalCloseLabel: 'Закрыть',
    modalOverlayCloseLabel: 'Закрыть модальное окно',
    loadingLabel: 'Загрузка...',
    previousPeriodLabel: 'Предыдущий период',
    nextPeriodLabel: 'Следующий период',
    scrollLeftLabel: 'Прокрутить события влево',
    scrollRightLabel: 'Прокрутить события вправо',
    modalYearLabel: 'Год',
    eventButtonLabel: (year) => `Открыть событие ${year} года`,
    periodButtonLabel: (period) => `Показать период ${period}`,
  },
  en: {
    appTitle: 'Historical Years',
    historyTitle: 'Historical Dates',
    languageToggleLabel: 'Switch language',
    themeToggleLabel: 'Switch theme',
    modalCloseLabel: 'Close',
    modalOverlayCloseLabel: 'Close modal',
    loadingLabel: 'Loading...',
    previousPeriodLabel: 'Previous period',
    nextPeriodLabel: 'Next period',
    scrollLeftLabel: 'Scroll events left',
    scrollRightLabel: 'Scroll events right',
    modalYearLabel: 'Year',
    eventButtonLabel: (year) => `Open the ${year} event`,
    periodButtonLabel: (period) => `Show period ${period}`,
  },
};

export const isLanguage = (value: string | null): value is Language =>
  value === 'ru' || value === 'en';

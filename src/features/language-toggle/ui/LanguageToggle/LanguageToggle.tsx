import type { Language } from '@/shared/config/i18n';

import styles from './LanguageToggle.module.scss';

interface LanguageToggleProps {
  language: Language;
  ariaLabel: string;
  onChangeLanguage: (language: Language) => void;
}

function LanguageToggle({ language, ariaLabel, onChangeLanguage }: LanguageToggleProps) {
  return (
    <div className={styles.toggle} role="group" aria-label={ariaLabel}>
      <button
        type="button"
        className={`${styles.option} ${language === 'ru' ? styles.active : ''}`}
        onClick={() => onChangeLanguage('ru')}
        aria-pressed={language === 'ru'}
      >
        RU
      </button>
      <button
        type="button"
        className={`${styles.option} ${language === 'en' ? styles.active : ''}`}
        onClick={() => onChangeLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageToggle;

import type { Theme } from '@/app/providers/ThemeContext';

import styles from './ToggleTheme.module.scss';

interface Props {
  theme: Theme;
  ariaLabel: string;
  toggleTheme: () => void;
}

function ToggleTheme({ theme, ariaLabel, toggleTheme }: Props) {
  return (
    <label className={styles.switch}>
      <input
        aria-label={ariaLabel}
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <span className={styles.slider} />
    </label>
  );
}

export default ToggleTheme;

import type { Theme } from '@/app/providers/ThemeContext';

import styles from './ToggleTheme.module.scss';

interface Props {
  theme: Theme;
  toggleTheme: () => void;
}

function ToggleTheme({ theme, toggleTheme }: Props) {
  return (
    <label className={styles.switch}>
      <input
        aria-label="Переключить тему"
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <span className={styles.slider} />
    </label>
  );
}

export default ToggleTheme;

import React from 'react';
import styles from './ToggleTheme.module.scss';

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const ToggleTheme: React.FC<Props> = ({ theme, toggleTheme }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleTheme();
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleTheme;

import React from 'react';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.line} />
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;

import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.line} />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default SectionTitle;

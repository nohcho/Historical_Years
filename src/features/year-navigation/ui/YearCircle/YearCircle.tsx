import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';

import styles from './YearCircle.module.scss';

interface YearCircleProps {
  years: number[];
  activeYear: number;
  onSelectYear: (year: number) => void;
  renderDotLabel?: (yearValue: number, index: number) => ReactNode;
  getDotAriaLabel?: (index: number) => string;
}

function YearCircle({
  years,
  activeYear,
  onSelectYear,
  renderDotLabel,
  getDotAriaLabel,
}: YearCircleProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const updateRadius = () => {
      if (!circleRef.current) return;
      const width = circleRef.current.offsetWidth;
      if (!width) return;
      setRadius(width / 2);
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const activeIndex = years.indexOf(activeYear);
  const rotation = activeIndex === -1 ? 0 : -(360 / years.length) * activeIndex;

  const labels = useMemo(
    () =>
      years.map((yearValue, index) =>
        renderDotLabel ? renderDotLabel(yearValue, index) : index + 1,
      ),
    [renderDotLabel, years],
  );

  return (
    <>
      <div className={styles.backgroundLines}>
        <div className={styles.circle} />
      </div>

      <div className={styles.wrapper}>
        <div
          className={styles.circle}
          ref={circleRef}
          style={{ '--rotation': `${rotation}deg` } as CSSProperties}
        >
          {years.map((yearValue, i) => {
            const angle = (360 / years.length) * i;
            const isActive = yearValue === activeYear;
            const isHovered = i === hoveredIndex;

            return (
              <button
                key={yearValue}
                type="button"
                className={`${styles.dot} ${isActive ? styles.active : ''} ${
                  isHovered ? styles.hovered : ''
                }`}
                style={
                  {
                    '--r': `${angle}deg`,
                    '--radius': `${radius}px`,
                  } as CSSProperties
                }
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectYear(yearValue)}
                aria-label={getDotAriaLabel ? getDotAriaLabel(i + 1) : `Show period ${i + 1}`}
              >
                <div
                  className={styles.dotInner}
                  style={{
                    transform: `rotate(calc(-1 * (var(--r) + var(--rotation, 0deg))))`,
                  }}
                >
                  <span className={styles.dotLabel}>{labels[i]}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default YearCircle;

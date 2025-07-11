import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

import styles from './YearCircle.module.scss';

interface YearCircleProps {
  years: number[];
  activeYear: number;
  onSelectYear: (year: number) => void;
  renderDotLabel?: (yearValue: number, index: number) => React.ReactNode;
}

const YearCircle: React.FC<YearCircleProps> = ({
  years,
  activeYear,
  onSelectYear,
  renderDotLabel,
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  const dotInnerRefs = useRef<HTMLDivElement[]>([]);
  const [radius, setRadius] = useState('200px');
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    const updateRadius = () => {
      if (!circleRef.current) return;
      const width = circleRef.current.offsetWidth;
      if (!width) return;
      const newRadiusPx = width / 2;
      const newRadius = `${newRadiusPx}px`;
      if (newRadius !== radius) {
        setRadius(newRadius);
        dotRefs.current.forEach((dotEl) => {
          if (dotEl) dotEl.style.setProperty('--radius', newRadius);
        });
        setForceUpdate((prev) => prev + 1);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [radius]);

  useEffect(() => {
    const index = years.indexOf(activeYear);
    if (index === -1) return;

    const angle = (360 / years.length) * index;

    gsap.to(circleRef.current, {
      duration: 0.8,
      ease: 'power2.out',
      rotate: -angle,
      onUpdate: () => {
        circleRef.current?.style.setProperty('--rotation', `${-angle}deg`);
      },
    });
  }, [activeYear, years, radius]);

  useEffect(() => {
    dotRefs.current.forEach((dotEl, i) => {
      if (!dotEl) return;

      const yearValue = years[i];
      const isActive = yearValue === activeYear;
      const isHovered = i === hoveredIndex;

      const size = isActive || isHovered ? 40 : 14;
      const labelOpacity = isActive || isHovered ? 1 : 0;

      dotEl.style.setProperty('--radius', radius);

      gsap.to(dotEl, {
        width: size,
        height: size,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(dotInnerRefs.current[i], {
        autoAlpha: labelOpacity,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  }, [hoveredIndex, activeYear, years, radius]);

  return (
    <>
      <div className={styles.backgroundLines}>
        <div className={styles.circle} />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.circle} ref={circleRef}>
          {years.map((yearValue, i) => {
            const angle = (360 / years.length) * i;

            return (
              <div
                key={`${yearValue}-${forceUpdate}`}
                ref={(el) => {
                  if (el) {
                    dotRefs.current[i] = el;
                  }
                }}
                className={styles.dot}
                style={
                  {
                    '--r': `${angle}deg`,
                    '--radius': radius,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectYear(yearValue)}
              >
                <div
                  ref={(innerEl) => {
                    if (innerEl) dotInnerRefs.current[i] = innerEl;
                  }}
                  className={styles.dotInner}
                  style={{
                    transform: `rotate(calc(-1 * (var(--r) + var(--rotation, 0deg))))`,
                  }}
                >
                  <span className={styles.dotLabel}>
                    {renderDotLabel ? renderDotLabel(yearValue, i) : i + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default YearCircle;

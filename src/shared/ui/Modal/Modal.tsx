import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

interface ModalProps {
  visible?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  preventClose?: boolean;
  preventCloseByOverlay?: boolean;
  size?: 'sm' | 'md' | 'lg';
  lock?: boolean;
}

const TRANSITION_DURATION = 300;

export function Modal({
  visible,
  onClose,
  children,
  size = 'md',
  preventClose,
  preventCloseByOverlay,
  lock,
}: ModalProps) {
  const [mounted, setMounted] = useState(Boolean(visible));
  const [opened, setOpened] = useState(Boolean(visible));

  const handleClose = useCallback(() => {
    if (!preventClose) onClose?.();
  }, [onClose, preventClose]);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      const frame = window.requestAnimationFrame(() => setOpened(true));
      return () => window.cancelAnimationFrame(frame);
    }

    setOpened(false);
    const timeout = window.setTimeout(() => setMounted(false), TRANSITION_DURATION);
    return () => window.clearTimeout(timeout);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === 'Escape') handleClose();
    }

    const previousOverflow = document.body.style.overflowY;
    document.body.style.setProperty('overflow-y', 'hidden');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflowY = previousOverflow;
    };
  }, [visible, handleClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className={`${styles.modalTransitionWrapper} ${opened ? styles.opened : ''}`}
      role="presentation"
    >
      <button
        type="button"
        className={styles.modalOverlay}
        onClick={preventCloseByOverlay ? undefined : handleClose}
        disabled={preventCloseByOverlay}
        aria-label="Закрыть модальное окно"
      />

      <div
        className={`${styles.modalRoot} ${styles[`size-${size}`]}`}
        role="dialog"
        aria-modal="true"
      >
        {!preventClose && (
          <button
            type="button"
            className={styles.modalCloseButton}
            onClick={handleClose}
            aria-label="Закрыть"
          >
            x
          </button>
        )}

        <div className={styles.modalContainer}>
          {lock && <div className={styles.modalLock}>Загрузка...</div>}
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

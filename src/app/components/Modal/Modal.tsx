import React, { useEffect, useRef, useCallback, Fragment } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import styles from './Modal.module.scss';

interface ModalProps {
  visible?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  preventClose?: boolean;
  preventCloseByOverlay?: boolean;
  size?: 'sm' | 'md' | 'lg';
  lock?: boolean;
}

const TRANSITION_DURATION = 300;

const defaultStyle: React.CSSProperties = {
  transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: Record<string, React.CSSProperties> = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export function Modal({
  visible,
  onClose,
  children,
  size = 'md',
  preventClose,
  preventCloseByOverlay,
  lock,
}: ModalProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (!preventClose) onClose?.();
  }, [onClose, preventClose]);

  const handleHide = () => {
    document.body.style.removeProperty('overflow-y');
  };

  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === 'Escape') handleClose();
    }

    document.body.style.setProperty('overflow-y', 'hidden');
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      handleHide();
    };
  }, [visible, handleClose]);

  return (
    <Fragment>
      {createPortal(
        <Transition
          in={visible}
          timeout={TRANSITION_DURATION}
          unmountOnExit
          onExited={handleHide}
          nodeRef={nodeRef}
        >
          {(state) => (
            <div
              ref={nodeRef}
              className={styles.modalTransitionWrapper}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <div
                className={styles.modalOverlay}
                onClick={preventCloseByOverlay ? undefined : handleClose}
              />

              <div className={`${styles.modalRoot} ${styles[`size-${size}`]}`}>
                {!preventClose && (
                  <button className={styles.modalCloseButton} onClick={handleClose}>
                    x
                  </button>
                )}

                <div className={styles.modalContainer}>
                  {lock && <div className={styles.modalLock}>Загрузка...</div>}
                  {children}
                </div>
              </div>
            </div>
          )}
        </Transition>,
        document.body,
      )}
    </Fragment>
  );
}

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Modal.module.scss';

const Modal = forwardRef(
    (
        {
            isOpen,
            onRequestClose,
            onAfterOpen,
            onAfterClose,
            overlayClassName,
            className,
            bodyOpenClassName,
            htmlOpenClassName,
            children,
            shouldCloseOnOverlayClick = true,
            shouldCloseOnEsc = true,
            closeTimeoutMS = 0,
        },
        ref
    ) => {
        const overlayRef = useRef(null);
        const modalRef = useRef(null);
        const closeButtonRef = useRef(null);
        const lastFocusedElementRef = useRef(null);
        const [isClosing, setIsClosing] = useState(false);
        const [internalOpen, setInternalOpen] = useState(isOpen);

        // Đồng bộ internalOpen với isOpen
        useEffect(() => {
            setInternalOpen(isOpen);
        }, [isOpen]);

        // Cung cấp methods qua ref
        useImperativeHandle(ref, () => ({
            open: () => setInternalOpen(true),
            close: () => handleClose(),
            toggle: () => setInternalOpen((prev) => !prev),
        }));

        // Lưu element trước khi mở modal
        useEffect(() => {
            if (internalOpen) {
                lastFocusedElementRef.current = document.activeElement;
            }
        }, [internalOpen]);

        // Xử lý click overlay
        const handleOverlayClick = (event) => {
            if (shouldCloseOnOverlayClick && event.target === overlayRef.current) {
                handleClose();
            }
        };

        // Xử lý đóng modal với delay
        const handleClose = () => {
            if (closeTimeoutMS > 0) {
                setIsClosing(true);
                setTimeout(() => {
                    setIsClosing(false);
                    setInternalOpen(false);
                    onRequestClose?.();
                    onAfterClose?.();
                    lastFocusedElementRef.current?.focus();
                }, closeTimeoutMS);
            } else {
                setInternalOpen(false);
                onRequestClose?.();
                onAfterClose?.();
                lastFocusedElementRef.current?.focus();
            }
        };

        // Gọi onAfterOpen và focus vào modal khi mở
        useEffect(() => {
            if (internalOpen && !isClosing) {
                onAfterOpen?.();
                closeButtonRef.current?.focus();
            }
        }, [internalOpen, isClosing, onAfterOpen]);

        // Xử lý phím Esc
        useEffect(() => {
            if (!shouldCloseOnEsc || !internalOpen || isClosing) return;

            const handleEscKey = (event) => {
                if (event.key === 'Escape') {
                    handleClose();
                }
            };

            document.addEventListener('keydown', handleEscKey);
            return () => {
                document.removeEventListener('keydown', handleEscKey);
            };
        }, [internalOpen, isClosing, shouldCloseOnEsc, handleClose]);

        // Trap focus trong modal
        useEffect(() => {
            if (!internalOpen || isClosing) return;

            const focusableElements = modalRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements?.[0];
            const lastElement = focusableElements?.[focusableElements.length - 1];

            const handleTabKey = (event) => {
                if (event.key === 'Tab') {
                    if (event.shiftKey && document.activeElement === firstElement) {
                        event.preventDefault();
                        lastElement?.focus();
                    } else if (!event.shiftKey && document.activeElement === lastElement) {
                        event.preventDefault();
                        firstElement?.focus();
                    }
                }
            };

            document.addEventListener('keydown', handleTabKey);
            return () => {
                document.removeEventListener('keydown', handleTabKey);
            };
        }, [internalOpen, isClosing]);

        // Thêm/Remove class cho body và html
        useEffect(() => {
            const bodyClass = bodyOpenClassName || 'modal-open';
            const htmlClass = htmlOpenClassName || 'modal-open';

            if (internalOpen && !isClosing) {
                document.body.classList.add(bodyClass);
                document.documentElement.classList.add(htmlClass);
            } else {
                document.body.classList.remove(bodyClass);
                document.documentElement.classList.remove(htmlClass);
            }

            return () => {
                document.body.classList.remove(bodyClass);
                document.documentElement.classList.remove(htmlClass);
            };
        }, [internalOpen, isClosing, bodyOpenClassName, htmlOpenClassName]);

        if (!internalOpen && !isClosing) return null;

        return (
            <div
                className={clsx(styles.overlay, { [styles.open]: internalOpen && !isClosing }, overlayClassName)}
                ref={overlayRef}
                onClick={handleOverlayClick}
            >
                <div
                    className={clsx(styles.modal, { [styles.open]: internalOpen && !isClosing }, className)}
                    ref={modalRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    {children}
                    <button
                        className={styles.closeButton}
                        ref={closeButtonRef}
                        onClick={handleClose}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        );
    }
);

// Định nghĩa PropTypes
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    children: PropTypes.node,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    closeTimeoutMS: PropTypes.number,
};

export default Modal;
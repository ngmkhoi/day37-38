import {useEffect, useRef, useState} from "react";
import {clsx} from "clsx";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";


function Modal({
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
}) {
    const overlayRef = useRef(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleOverlayClick = (event) => {
        if(shouldCloseOnOverlayClick && event.target === overlayRef.current) {
            handleClose();
        }
    };

    // Xử lý đóng modal với delay
    const handleClose = () => {
        if (closeTimeoutMS > 0) {
            setIsClosing(true);
            setTimeout(() => {
                setIsClosing(false);
                onRequestClose?.();
                onAfterClose?.();
            }, closeTimeoutMS);
        } else {
            onRequestClose?.();
            onAfterClose?.();
        }
    };

    useEffect(() => {
        if(isOpen && !isClosing) {
            onAfterOpen?.();
        }
    }, [isOpen, isClosing, onAfterOpen]);

    // Gọi onAfterOpen khi modal mở
    useEffect(() => {
        if (isOpen && !isClosing) {
            onAfterOpen?.();
        }
    }, [isOpen, isClosing, onAfterOpen]);

    // Xử lý phím Esc
    useEffect(() => {
        if (!shouldCloseOnEsc || !isOpen || isClosing) return;

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, isClosing, shouldCloseOnEsc, handleClose]);

    useEffect(() => {
        const bodyClass = bodyOpenClassName || 'modal-open';
        const htmlClass = htmlOpenClassName || 'modal-open';

        if (isOpen && !isClosing) {
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
    }, [isOpen, isClosing, bodyOpenClassName, htmlOpenClassName]);

    if (!isOpen && !isClosing) return null;

    return (
        <div
            className={clsx(styles.overlay, { [styles.open]: isOpen && !isClosing }, overlayClassName)}
            ref={overlayRef}
            onClick={handleOverlayClick}
        >
            <div className={clsx(styles.modal, { [styles.open]: isOpen && !isClosing }, className)}>
                {children}
                <button
                    className={styles.closeButton}
                    onClick={handleClose}
                >
                    Đóng
                </button>
            </div>
        </div>
    )
}

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
}

export default Modal;
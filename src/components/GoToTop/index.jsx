import { useEffect, useState } from 'react';
import styles from './GoToTop.module.scss';
import { FaArrowUp } from 'react-icons/fa';

function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY >= 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`${styles.goToTop} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
            title="Lên đầu trang"
        >
            <FaArrowUp />
        </button>
    );
}

export default GoToTop;
import GoToTop from "../../components/GoToTop/index.jsx";
import styles from './ScrollDemo.module.scss';

function ScrollDemo() {
    return (
        <div className={styles.container}>
            <h1>Scroll Demo Page</h1>
            {Array.from({ length: 15 }).map((_, index) => (
                <p key={index} className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            ))}
            <GoToTop />
        </div>
    );
}

export default ScrollDemo;
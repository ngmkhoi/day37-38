import styles from './Home.module.scss';
import {useState} from "react";
import Modal from "../../components/Modal/index.jsx";
import GoToTop from "../../components/GoToTop/index.jsx";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h1>Trang chủ</h1>
            <button onClick={() => setIsOpen(!isOpen)}>
                Mở Modal
            </button>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                onAfterOpen={() => console.log('Modal đã mở')}
                onAfterClose={() => console.log('Modal đã đóng')}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                closeTimeoutMS={300}
                overlayClassName={styles.customOverlay}
                className={styles.customModal}
                bodyOpenClassName="my-modal-open"
                htmlOpenClassName="my-modal-open"
            >
                <h2>Modal Test</h2>
                <p>Đây là nội dung modal với PropTypes và clsx.</p>
            </Modal>

            {/* Thêm nội dung dài để test scroll */}
            {Array.from({ length: 25 }).map((_, index) => (
                <p key={index}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            ))}
            <GoToTop />

        </div>
    )
}

export default Home;
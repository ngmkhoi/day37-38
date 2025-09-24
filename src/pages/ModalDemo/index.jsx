import { useState, useRef } from 'react';
import Modal from '../../components/Modal';
import styles from './ModalDemo.module.scss';

function ModalDemo() {
    const [basicModalOpen, setBasicModalOpen] = useState(false);
    const [animationModalOpen, setAnimationModalOpen] = useState(false);
    const [noOverlayCloseModalOpen, setNoOverlayCloseModalOpen] = useState(false);
    const [noEscCloseModalOpen, setNoEscCloseModalOpen] = useState(false);
    const [customStyleModalOpen, setCustomStyleModalOpen] = useState(false);
    const [callbackModalOpen, setCallbackModalOpen] = useState(false);
    const [refModalOpen, setRefModalOpen] = useState(false);
    const modalRef = useRef(null);

    return (
        <div className={styles.container}>
            <h1>Demo Modal Component</h1>

            {/* Demo 1: Basic Modal */}
            <section className={styles.section}>
                <h2>1. Basic Modal</h2>
                <button onClick={() => setBasicModalOpen(true)}>Mở Basic Modal</button>
                <Modal
                    isOpen={basicModalOpen}
                    onRequestClose={() => setBasicModalOpen(false)}
                >
                    <h2 id="modal-title">Basic Modal</h2>
                    <p>Đây là modal cơ bản với nút mở và đóng.</p>
                </Modal>
            </section>

            {/* Demo 2: Modal với Animation */}
            <section className={styles.section}>
                <h2>2. Modal với Animation</h2>
                <button onClick={() => setAnimationModalOpen(true)}>Mở Animation Modal</button>
                <Modal
                    isOpen={animationModalOpen}
                    onRequestClose={() => setAnimationModalOpen(false)}
                    closeTimeoutMS={300}
                >
                    <h2 id="modal-title">Animation Modal</h2>
                    <p>Modal này có animation đóng sau 300ms.</p>
                </Modal>
            </section>

            {/* Demo 3: Không đóng khi click overlay */}
            <section className={styles.section}>
                <h2>3. Không đóng khi click Overlay</h2>
                <button onClick={() => setNoOverlayCloseModalOpen(true)}>
                    Mở No Overlay Close Modal
                </button>
                <Modal
                    isOpen={noOverlayCloseModalOpen}
                    onRequestClose={() => setNoOverlayCloseModalOpen(false)}
                    shouldCloseOnOverlayClick={false}
                >
                    <h2 id="modal-title">No Overlay Close Modal</h2>
                    <p>Click overlay không đóng modal, chỉ nút Đóng hoạt động.</p>
                </Modal>
            </section>

            {/* Demo 4: Không đóng khi nhấn Esc */}
            <section className={styles.section}>
                <h2>4. Không đóng khi nhấn Esc</h2>
                <button onClick={() => setNoEscCloseModalOpen(true)}>
                    Mở No Esc Close Modal
                </button>
                <Modal
                    isOpen={noEscCloseModalOpen}
                    onRequestClose={() => setNoEscCloseModalOpen(false)}
                    shouldCloseOnEsc={false}
                >
                    <h2 id="modal-title">No Esc Close Modal</h2>
                    <p>Nhấn Esc không đóng modal, chỉ nút Đóng hoặc click overlay hoạt động.</p>
                </Modal>
            </section>

            {/* Demo 5: Custom ClassName */}
            <section className={styles.section}>
                <h2>5. Custom ClassName</h2>
                <button onClick={() => setCustomStyleModalOpen(true)}>
                    Mở Custom Style Modal
                </button>
                <Modal
                    isOpen={customStyleModalOpen}
                    onRequestClose={() => setCustomStyleModalOpen(false)}
                    overlayClassName={styles.customOverlay}
                    className={styles.customModal}
                >
                    <h2 id="modal-title">Custom Style Modal</h2>
                    <p>Modal này có style tùy chỉnh cho overlay và modal.</p>
                </Modal>
            </section>

            {/* Demo 6: Callbacks */}
            <section className={styles.section}>
                <h2>6. Modal với Callbacks</h2>
                <button onClick={() => setCallbackModalOpen(true)}>
                    Mở Callback Modal
                </button>
                <Modal
                    isOpen={callbackModalOpen}
                    onRequestClose={() => setCallbackModalOpen(false)}
                    onAfterOpen={() => console.log('Callback Modal đã mở')}
                    onAfterClose={() => console.log('Callback Modal đã đóng')}
                    closeTimeoutMS={300}
                >
                    <h2 id="modal-title">Callback Modal</h2>
                    <p>Kiểm tra console để thấy log từ onAfterOpen và onAfterClose.</p>
                </Modal>
            </section>

            {/* Demo 7: Ref Methods */}
            <section className={styles.section}>
                <h2>7. Modal với Ref Methods</h2>
                <button onClick={() => modalRef.current.open()}>Mở Modal qua Ref</button>
                <button onClick={() => modalRef.current.close()}>Đóng Modal qua Ref</button>
                <button onClick={() => modalRef.current.toggle()}>Toggle Modal qua Ref</button>
                <Modal
                    ref={modalRef}
                    isOpen={refModalOpen}
                    onRequestClose={() => setRefModalOpen(false)}
                    closeTimeoutMS={300}
                >
                    <h2 id="modal-title">Ref Modal</h2>
                    <p>Modal này được điều khiển bằng ref methods (open, close, toggle).</p>
                </Modal>
            </section>
        </div>
    );
}

export default ModalDemo;
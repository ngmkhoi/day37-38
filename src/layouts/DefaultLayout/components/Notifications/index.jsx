import { useState, useEffect, useRef } from 'react';
import styles from './Notifications.module.scss';

function Notification() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const notificationCount = 3; // Fake số lượng thông báo

    // Fake data thông báo
    const notifications = [
        { id: 1, title: 'Khóa học mới!', description: 'Khóa JavaScript nâng cao đã ra mắt.' },
        { id: 2, title: 'Cập nhật bài viết', description: 'Bài viết về React được cập nhật.' },
        { id: 3, title: 'Nhắc nhở', description: 'Hoàn thành bài tập trước 23:59.' },
    ];

    // Xử lý click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.notification} ref={dropdownRef}>
            <button
                className={styles.bellButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                🔔
                {notificationCount > 0 && (
                    <span className={styles.badge}>{notificationCount}</span>
                )}
            </button>
            {isOpen && (
                <div className={styles.dropdown}>
                    {notifications.map((notif) => (
                        <div key={notif.id} className={styles.notificationItem}>
                            <p className={styles.title}>{notif.title}</p>
                            <p className={styles.description}>{notif.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Notification;
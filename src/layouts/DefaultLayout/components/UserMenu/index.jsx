import {useEffect, useRef, useState} from "react";
import styles from "./UserMenu.module.scss";
import {Link} from "react-router-dom";


function UserMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const user = {
        name: 'Nguyễn Văn A',
        avatar: 'https://i.pravatar.cc/40', // Placeholder avatar
    };

    // Fake data cho menu
    const menuItems = [
        { id: 'header', type: 'header' }, // Thêm item giả để tạo header
        { id: 1, label: 'Trang cá nhân', to: '/profile', icon: '👤' },
        { id: 2, label: 'Cài đặt', to: '/settings', icon: '⚙️' },
        { id: 'divider', type: 'divider' }, // Thêm item để tạo đường kẻ
        { id: 3, label: 'Đăng xuất', to: '/logout', icon: '🚪' },
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <div className={styles.userMenu} ref={dropdownRef}>
            <button
                className={styles.userButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={user.avatar} alt={user.name} className={styles.avatar} />
                <span className={styles.userName}>{user.name}</span>
            </button>

            {isOpen && (
                <ul className={styles.dropdown}>
                    {menuItems.map((item) => {
                        // Tạo đường kẻ phân cách
                        if (item.type === 'divider') {
                            return <li key={item.id} className={styles.divider}></li>;
                        }

                        // Tạo header cho dropdown
                        if (item.type === 'header') {
                            return (
                                <li key={item.id} className={styles.dropdownHeader}>
                                    <img src={user.avatar} alt={user.name} className={styles.avatar} />
                                    <div className={styles.userInfo}>
                                        <span className={styles.userName}>{user.name}</span>
                                        <span className={styles.userEmail}>@nguyenvana</span>
                                    </div>
                                </li>
                            )
                        }

                        // Render các item menu bình thường
                        return (
                            <li key={item.id}>
                                <Link to={item.to} className={styles.menuItem} onClick={() => setIsOpen(false)}>
                                    <span className={styles.icon}>{item.icon}</span>
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    )
}

export default UserMenu
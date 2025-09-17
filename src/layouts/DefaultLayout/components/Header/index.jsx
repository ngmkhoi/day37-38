import styles from './Header.module.scss'
import AppLogo from "../AppLogo/index.jsx";
import SearchForm from "../SearchForm/index.jsx";
import MyCourses from "../MyCourses/index.jsx";
import Notifications from "../Notifications/index.jsx";
import UserMenu from "../UserMenu/index.jsx";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                {/* 1. KHU VỰC BÊN TRÁI */}
                <div className={styles.leftSection}>
                    <AppLogo />
                </div>

                {/* 2. KHU VỰC Ở GIỮA */}
                <div className={styles.centerSection}>
                    <SearchForm />
                </div>

                {/* 3. KHU VỰC BÊN PHẢI */}
                <div className={styles.rightSection}>
                    <MyCourses />
                    <Notifications />
                    <UserMenu />
                </div>
            </div>
        </header>
    )
}

export default Header;
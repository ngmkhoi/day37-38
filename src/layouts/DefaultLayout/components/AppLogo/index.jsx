import { Link } from "react-router-dom";
import styles from './AppLogo.module.scss'

function AppLogo(){
    return (
        <Link to="/" className={styles.logo}>
            <img
                src="/src/assets/f8-icon.png" 
                alt="F8 Logo" 
                className={styles.logoImage}
            />
            <span className={styles.logoText}>Học Lập Trình Để Đi Làm</span>
        </Link>
    )
}

export default AppLogo;


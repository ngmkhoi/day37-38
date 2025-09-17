import styles from './DefaultLayout.module.scss';
import {Outlet} from "react-router-dom";
import Header from "./components/Header/index.jsx";

function DefaultLayout() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    )
}

export default DefaultLayout;
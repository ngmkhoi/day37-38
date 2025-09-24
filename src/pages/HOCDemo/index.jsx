import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import ProductList from '../../components/ProductList';
import styles from './HOCDemo.module.scss';

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false);

    const toggleUserLoading = () => {
        setUserLoading((prev) => !prev);
    };

    const toggleProductLoading = () => {
        setProductLoading((prev) => !prev);
    };

    return (
        <div className={styles.container}>
            <h1>HOC Demo</h1>
            <div className={styles.section}>
                <h2>User Profile</h2>
                <button onClick={toggleUserLoading}>
                    {userLoading ? 'Hide Loading' : 'Show Loading'}
                </button>
                <UserProfile isLoading={userLoading} />
            </div>
            <div className={styles.section}>
                <h2>Product List</h2>
                <button onClick={toggleProductLoading}>
                    {productLoading ? 'Hide Loading' : 'Show Loading'}
                </button>
                <ProductList isLoading={productLoading} />
            </div>
        </div>
    );
}

export default HOCDemo;
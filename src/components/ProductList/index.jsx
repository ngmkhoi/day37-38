import styles from './ProductList.module.scss'
import WithLoading from "../../hoc/withLoading.jsx";

function ProductList(){
    const products = ['iPhone', 'Xiaomi', 'Samsung']

    return (
        <div className={styles.container}>
            <h3>Products</h3>
            {products.map(product => (
                <div key={product} className={styles.product}>
                    {product}
                </div>
            ))}
        </div>
    )
}

const ProductListWithLoading = WithLoading(ProductList)

export default ProductListWithLoading;

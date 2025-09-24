import PropTypes from 'prop-types';
import styles from './withLoading.module.scss';

function withLoading(WrappedComponent) {
    function WithLoading({ isLoading, ...props }) {
        if (isLoading) {
            return (
                <div className={styles.loadingContainer}>
                    <div className={styles.spinner}></div>
                    <p>Loading...</p>
                </div>
            );
        }
        return <WrappedComponent {...props} />;
    }

    WithLoading.propTypes = {
        isLoading: PropTypes.bool,
    };

    // Đặt displayName để debug dễ hơn
    WithLoading.displayName = `WithLoading(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithLoading;
}

export default withLoading;
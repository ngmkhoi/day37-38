import {memo} from "react";
import styles from "./ActionButtons.module.scss";
import PropTypes from "prop-types";


function ActionButtons({onIncrement, onReset}) {
    console.log('ActionButtons re-rendered');

    return (
        <div className={styles.container}>
            <h3>Action Button</h3>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

ActionButtons.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
}

export default memo(ActionButtons);
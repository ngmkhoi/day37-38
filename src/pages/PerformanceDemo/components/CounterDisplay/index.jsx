import styles from './CounterDisplay.module.scss';
import PropTypes from "prop-types";
import {memo} from "react";

function CounterDisplay({count}) {
    console.log('CounterDisplay re-rendered');
    return (
        <div className={styles.container}>
            <h3>Counter Display</h3>
            <p>Count: {count}</p>
        </div>
    )
}

CounterDisplay.propTypes = {
    count: PropTypes.number.isRequired
}

export default memo(CounterDisplay);
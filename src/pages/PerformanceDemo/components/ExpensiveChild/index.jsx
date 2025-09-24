import {memo, useMemo} from "react";
import styles from "./ExpensiveChild.module.scss";
import PropTypes from "prop-types";

function ExpensiveChild({items}) {
    console.log('ExpensiveChild re-rendered');

    // Tính toán nặng: tìm item có tên dài nhất
    const longestName = useMemo(() => {
        console.log('Calculating longest name...');
        let longest = '';
        items.forEach((item) => {
            // Giả lập tính toán nặng
            for (let i = 0; i < 100000; i++) {}
            if (item.name.length > longest.length) {
                longest = item.name;
            }
        });
        return longest;
    }, [items]);

    const totalLength = items.reduce((sum, item) => {
        for(let i = 0; i < 1000000; i++ ) {}
        return sum + item.name.length;
    }, 0)

    return (
        <div className={styles.container}>
            <h3>Expensive Child</h3>
            <p>Total length of item Names: {totalLength} </p>
            <p>Longest item Names: {longestName} </p>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

ExpensiveChild.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default memo(ExpensiveChild);
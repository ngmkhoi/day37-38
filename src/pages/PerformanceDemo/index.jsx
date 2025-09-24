import {useCallback, useState} from "react";
import styles from "./PerformanceDemo.module.scss";
import CounterDisplay from "./components/CounterDisplay/index.jsx";
import ActionButtons from "./components/ActionButtons/index.jsx";
import ExpensiveChild from "./components/ExpensiveChild/index.jsx";

function PerformanceDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Nguyen Khoi');
    const [items, setItems] = useState([
        { id: 1, name: 'Item A' },
        { id: 2, name: 'Item B' },
    ]);

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, [])

    const handleReset = useCallback(() => {
        setCount(0);
    }, [])

    const handleChangeName = useCallback(() => {
        setName(`User ${Math.random().toFixed(2)}`)
    }, [])

    const handleAddItem = () => {
        setItems((prevItems) => [
            ...prevItems,
            { id: prevItems.length + 1, name: `Item ${String.fromCharCode(65 + prevItems.length)}` },
        ]);
    };

    return (
        <div className={styles.container}>
            <h1>Performance Demo</h1>
            <div className={styles.section}>
                <h2>Counter: {count}</h2>
                <h3>Name: {name}</h3>
                <button onClick={handleIncrement}>Increment Count</button>
                <button onClick={handleChangeName}>Change Name</button>
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            <CounterDisplay count={count} />
            <ActionButtons onIncrement={handleIncrement} onReset={handleReset} />
            <ExpensiveChild items={items} />
        </div>
    )
}

export { PerformanceDemo };
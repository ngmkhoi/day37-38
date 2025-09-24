import styles from './FocusDemo.module.scss'
import {useEffect, useRef, useState} from "react";
import CustomInput from "../../components/CustomInput/index.jsx";

function FocusDemo() {
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const renderCountRef = useRef(0);

    useEffect(() => {
        renderCountRef.current += 1;
        console.log(`Render Count: ${renderCountRef.current}`);
    })

    const handleFocusInput1 = () => {
        input1Ref.current.focus();
    }

    const handleFocusInput2 = () => {
        input2Ref.current.focus();
    }

    const handleClearBoth = () => {
        setInput1Value('');
        setInput2Value('');
        input1Ref.current.blur();
        input2Ref.current.blur();
    }

    const handleGetValues = () => {
        const value1 = input1Ref.current.value;
        const value2 = input2Ref.current.value;
        alert(`Input 1: ${value1}, Input 2: ${value2}`);
    }

    return(
        <div className={styles.container}>
            <h1>Focus Demo</h1>
            <p>Render count: {renderCountRef.current}</p>
            <div className={styles.inputSection}>
                <CustomInput
                    ref={input1Ref}
                    label="Input 1"
                    placeholder="Enter text for Input 1"
                    value={input1Value}
                    onChange={(e) => setInput1Value(e.target.value)}
                />
                <CustomInput
                    ref={input2Ref}
                    label="Input 2"
                    placeholder="Enter text for Input 2"
                    value={input2Value}
                    onChange={(e) => setInput2Value(e.target.value)}
                />
            </div>
            <div className={styles.buttonSection}>
                <button onClick={handleFocusInput1}>Focus Input 1</button>
                <button onClick={handleFocusInput2}>Focus Input 2</button>
                <button onClick={handleClearBoth}>Clear Both</button>
                <button onClick={handleGetValues}>Get Values</button>
            </div>
        </div>
    )
}

export default FocusDemo;
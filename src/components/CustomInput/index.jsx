import { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import styles from './CustomInput.module.scss';

const CustomInput = forwardRef(({ label, placeholder, value, onChange }, ref) => {
    const inputRef = useRef(null);

    // Tùy chỉnh ref với các method
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        blur: () => inputRef.current?.blur(),
        getValue: () => inputRef.current?.value,
    }));

    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles.input}
            />
        </div>
    );
});

CustomInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CustomInput;
import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    required: PropTypes.bool,
    autoComplete: PropTypes.string,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default function TextInput({ type = 'text', name, value, defaultValue, variant = 'primary', className = '', placeholder, isError, handleChange ,isFocused = false, ...props }) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                name={name}
                value={value}
                defaultValue={defaultValue}
                type={type}
                className={
                    `rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${className}` +
                    className
                }
                ref={input}
                placeholder={placeholder}
            />
        </div>
    );
};

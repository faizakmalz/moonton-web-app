import PropTypes from 'prop-types'

SecondaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "warning", "danger", "light-outline", "white-outline",]),
    disabled: PropTypes.bool,
    children: PropTypes.node,
}

export default function SecondaryButton({ type = 'submit', className = '', variant ='primary' , disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `rounded-2xl w-full ${disabled && "opacity-30"} btn-${variant} py-[13px] text-center` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

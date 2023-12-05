// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, type, className }) => {
    return (
        <button className={`custom-button ${className}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    className: '',
};

export default Button;

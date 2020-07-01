import React from 'react';
import './toggleUpDown.scss'

const ToggleUpDown = ({ children, ...otherProps }) => {
    return (
        <button className="toggle" {...otherProps}>
            {children}
        </button>
    );
};

export default ToggleUpDown;
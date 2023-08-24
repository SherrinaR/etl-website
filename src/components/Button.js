import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// default setting for button style & size
const STYLES = ['btn-primary', 'btn-outnline']

const SIZES = ['btn-medium', 'btn-large']

// CSS classes for styling the button
export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    // conditional to check for button style & size or use default setting
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/about' className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};
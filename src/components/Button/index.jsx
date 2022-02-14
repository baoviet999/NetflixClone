import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
Button.propTypes = {
    onClick: PropTypes.func,
};

function Button({ onClick, className, children, icon, background }) {
    const handleClick = () => {
        if (!onClick) return;
        onClick();
    };
    return (
        <button
            style={{ background: background.background, color: background.color }}
            className={`btn-play ${className}`}
            onClick={handleClick}
        >
            <i className={icon}></i> {children}
        </button>
    );
}
export function OutLineBtn({ onClick, className, children }) {
    const handleClick = () => {
        if (!onClick) return;
        onClick();
    };
    return (
        <button className={`btn btn-outline ${className}`} onClick={handleClick}>
            {children}
        </button>
    );
}
export default Button;

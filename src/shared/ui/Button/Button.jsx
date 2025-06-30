import React from 'react';
import './styles.module.css'; //

export const RoundButton = ({ text, onClick }) => {
    return (
        <button
            className="round-button"
            onClick={onClick}
        >
            {text}
        </button>
    );
};
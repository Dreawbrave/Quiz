import React from 'react';
import styles from './styles.module.css';

export const RoundButton = ({ text, onClick, className = '' }) => {
    return (
        <button
            className={`${styles['round-button']} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
import React from 'react';
import styles from './styles.module.css';

export const RoundButton = ({ text, onClick }) => {
    return (
        <button
            className={styles['round-button']}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
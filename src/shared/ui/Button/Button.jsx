import React from 'react';
import styles from './styles.module.css';

export const RoundButton = ({ text = 'Кнопка', onClick }) => {
    return (
        <button
            className={styles.roundButton}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
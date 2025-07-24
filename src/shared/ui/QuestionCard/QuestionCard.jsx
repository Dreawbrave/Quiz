import React from 'react';
import styles from './styles.module.css';
import { RoundButton } from "../Button/Button.jsx";

export const QuestionCard = ({ question, variants = [], onVariantSelect }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{question}</h2>

            <div className={styles.buttonsContainer}>
                {variants.map((variant, index) => (
                    <RoundButton
                        key={index}
                        text={variant}
                        onClick={() => onVariantSelect?.(variant)}
                    />
                ))}
            </div>
        </div>
    );
};
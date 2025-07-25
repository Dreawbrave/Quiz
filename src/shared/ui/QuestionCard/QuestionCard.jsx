import React from 'react';
import styles from './styles.module.css';
import { RoundButton } from "../Button/Button.jsx";

export const QuestionCard = ({ question, variants = [], onVariantSelect }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{question}</h2>
            <img className={styles.cardImage} src="https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg"/> //в последствии заменится на ссылку из бд с картинкой
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
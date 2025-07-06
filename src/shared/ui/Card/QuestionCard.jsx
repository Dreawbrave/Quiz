import React from 'react';
import styles from './styles.module.css';
import { Card } from "antd";
import {RoundButton} from "../Button/Button.jsx";

export const QuestionCard = ({question, variants = [], onVariantSelect }) => {
    return (
        <Card
            title={question}
            className={styles['my_card']}
        >
            <div className={styles.buttonsContainer}>
                {variants.map((variant, index) => (
                    <RoundButton
                        key={index}
                        text={variant}
                        onClick={() => onVariantSelect?.(variant)}
                    >
                    </RoundButton>
                ))}
            </div>
        </Card>
);
};
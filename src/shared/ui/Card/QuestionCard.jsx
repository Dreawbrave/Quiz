import React from 'react';
import styles from './styles.module.css';
import { Card } from "antd";

export const QuestionCard = ({variant1, variant2, variant3, question}) => {
    return (
        <Card
            title={question}
            className={styles['my_card']}
        >
            <p>{variant1}</p>
            <p>{variant2}</p>
            <p>{variant3}</p>
        </Card>


    );
};
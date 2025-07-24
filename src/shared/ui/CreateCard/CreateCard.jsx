import React from 'react';
import styles from './styles.module.css';
import {Input} from 'antd'
import {RoundButton} from "../Button/Button.jsx";

export const CreateCard = () => {
    return (
        <div className={styles.card}>
            <Input className={styles.cardTitle} placeholder="Question"/>
            <Input className={styles.cardTitle} placeholder="Image link"/>
            <div className={styles.inputContainer}>
                <Input placeholder="First variant"/>
                <Input placeholder="Second variant"/>
                <Input placeholder="Third variant"/>
                <Input placeholder="Fourth variant"/>
                <RoundButton text={'Create question'}/>
            </div>
        </div>
    );
};
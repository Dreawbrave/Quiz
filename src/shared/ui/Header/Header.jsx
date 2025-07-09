import React from 'react';
import styles from './styles.module.css';
import {Search} from "../Search/Search.jsx";

export const MyHeader = () => {
    return (
        <header
            className={styles['myHeader']}
        >
            <Search/>
        </header>
    );
};
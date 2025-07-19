import React, { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';

export const MyHeader = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if (searchText.trim()) {
            navigate(`/search?q=${searchText}`);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => navigate('/')}>
                QuizApp
            </div>

            <div className={styles.searchContainer}>
                <Input.Search
                    placeholder="Поиск квизов..."
                    allowClear
                    enterButton
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onSearch={handleSearch}
                    className={styles.searchInput}
                />
            </div>
        </header>
    );
};
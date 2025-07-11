import React, { useState } from 'react';
import { Input, Card } from 'antd';

export const Search = ({ className = '' }) => {
    const [searchText, setSearchText] = useState('');

    const onSearch = (value) => {
        console.log('Ищем:', value);
    };

    return (
        <Card className={className}>
            <Input.Search
                placeholder="Введите запрос"
                allowClear
                enterButton="Найти"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onSearch={onSearch}
            />
        </Card>
    );
};
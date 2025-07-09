import React, { useState } from 'react';
import { Input, Card } from 'antd';

export const Search = () => {
    const [searchText, setSearchText] = useState('');

    const onSearch = (value) => {
        console.log('Ищем:', value);
        // вместо консоль лога поиск в БД
    };

    return (
        <Card style={{ width: 300 }}>
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
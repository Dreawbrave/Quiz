import React, { useState } from 'react';
import { Input, Card } from 'antd';

export const Search = ({ onSearch, className = '' }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <Card className={className}>
            <Input.Search
                placeholder="Введите ID квиза"
                allowClear
                enterButton="Найти"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onSearch={onSearch}
            />
        </Card>
    );
};
import React from 'react';
import { Button } from 'antd';
import './styles.module.css'; //

export const RoundButton = ({ text, onClick }) => {
    return (
        <Button
            className="round-button"
            onClick={onClick}
        >
            {text}
        </Button>
    );
};
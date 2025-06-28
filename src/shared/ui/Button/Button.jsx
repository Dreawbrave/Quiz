import React from 'react';
import { Button } from 'antd';
import './styles.module.css'; //

export const RoundButton = ({ children, onClick }) => {
    return (
        <Button
            className="custom-round-button"
            onClick={onClick}
        >
            {children}
        </Button>
    );
};
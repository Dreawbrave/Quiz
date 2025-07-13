import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import styles from './Timer.module.css'

const Timer = () => {
    const deadline = Date.now() + 1000 * 30;

    return (
        <div className={styles.timer}>
            <Row>
                {/* Убираем gutter и делаем колонку на всю ширину */}
                <Col span={24}> {/* 24 - максимальная ширина в системе сетки AntD */}
                    <Card>
                        <Statistic.Countdown
                            title="Таймер обратного отсчета"
                            value={deadline}
                            format="mm:ss"
                            style={{ fontSize: '24px' }} // Увеличиваем цифры
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Timer;
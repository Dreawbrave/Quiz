import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import styles from './Timer.module.css'

const Timer = () => {
    const deadline = Date.now() + 1000 * 30;

    return (
        <div className={styles.timer}>
            <Row>
                <Col span={24}>
                    <Card>
                        <Statistic.Countdown
                            title="Таймер обратного отсчета"
                            value={deadline}
                            format="mm:ss"
                            style={{ fontSize: '24px' }}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Timer;
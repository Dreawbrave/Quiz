import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';


const Timer = () => {
    //дедлайн:30 сек (в миллисекундах)
    const deadline = Date.now() + 1000 * 30;

    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card>
                    <Statistic.Countdown
                        title="Таймер обратного отсчета"
                        value={deadline}
                        format="mm:ss"  // Минуты:Секунды
                    />
                </Card>
            </Col>
        </Row>
    );
};

export default Timer;
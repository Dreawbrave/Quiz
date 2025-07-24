import styles from './styles.module.css';
import { RoundButton } from "../../shared/ui/Button/Button";
import { MyHeader } from "../../shared/ui/Header/Header";
import {CreateCard} from "../../shared/ui/CreateCard/CreateCard.jsx";
import { useState } from 'react';

export default function HomePage() {
    const [showCreateCard, setShowCreateCard] = useState(false);

    const handleCreateQuiz = () => {
        setShowCreateCard(true);
    };

    return (
        <div className={styles.pageContainer}>
            <MyHeader />

            <div className={styles.content}>
                {showCreateCard ? (
                    <CreateCard />
                ) : (
                    <RoundButton
                        text="Create quiz"
                        onClick={handleCreateQuiz}
                    />
                )}
            </div>
        </div>
    );
}
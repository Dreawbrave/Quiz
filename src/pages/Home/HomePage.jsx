import styles from './styles.module.css';
import { RoundButton } from "../../shared/ui/Button/Button";
import { MyHeader } from "../../shared/ui/Header/Header";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleCreateQuiz = () => {
        navigate('/quiz/new');
    };

    return (
        <div className={styles.pageContainer}>
            <MyHeader />

            <div className={styles.content}>
                <RoundButton
                    text="Создать квиз"
                    onClick={handleCreateQuiz}
                />
            </div>
        </div>
    );
}
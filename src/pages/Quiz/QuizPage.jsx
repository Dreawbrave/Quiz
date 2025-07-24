import { QuestionCard } from "../../shared/ui/QuestionCard/QuestionCard.jsx";
import styles from './styles.module.css';
import Timer from "../../entities/Timer/Timer.jsx";
import { useQuizStore } from "../../features/quiz-game/model/store";
import {useState} from "react";

export default function QuizPage() {
    const { score, incrementScore } = useQuizStore();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = [
        {
            text: "Какой язык программирования самый крутой?",
            variants: ["JavaScript", "Python", "TypeScript", "Java", "C++"],
            correctAnswer: "JavaScript"
        }
        // Добавьте другие вопросы
    ];

    const handleVariantSelect = (selectedVariant) => {
        if (selectedVariant === questions[currentQuestionIndex].correctAnswer) {
            incrementScore();
        }
        setCurrentQuestionIndex(prev => prev + 1);
    };

    return (
        <>
            <div className={styles.header}>
                <div>Счёт: {score}</div>
                <Timer />
            </div>
            <div className={styles.cardContainer}>
                {currentQuestionIndex < questions.length ? (
                    <QuestionCard
                        question={questions[currentQuestionIndex].text}
                        variants={questions[currentQuestionIndex].variants}
                        onVariantSelect={handleVariantSelect}
                    />
                ) : (
                    <div>Квиз завершён! Ваш результат: {score}/{questions.length}</div>
                )}
            </div>
        </>
    );
}
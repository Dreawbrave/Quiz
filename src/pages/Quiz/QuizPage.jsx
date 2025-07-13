import { QuestionCard } from "../../shared/ui/Card/QuestionCard.jsx";
import styles from './styles.module.css';
import Timer from "../../entities/Timer/TImer.jsx";

export default function QuizPage() {
    const handleVariantSelect = (selectedVariant) => {
        console.log('Выбран вариант:', selectedVariant);
    };

    const question = "Какой язык программирования самый крутой?";
    const variants = [
        "JavaScript",
        "Python",
        "TypeScript",
        "Java",
        "C++"
    ];

    return (
        <>
            <Timer/>
        <div className={styles.cardContainer}>
            <QuestionCard
                question={question}
                variants={variants}
                onVariantSelect={handleVariantSelect}
            />
        </div>
        </>
    );
}
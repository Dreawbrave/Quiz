import {QuestionCard} from "../../shared/ui/Card/QuestionCard.jsx";

export default function QuizPage() {
    const handleVariantSelect = (selectedVariant) => {
        console.log('Выбран вариант:', selectedVariant);
    }
        const question = "Какой язык программирования самый крутой?";   //Здесь get будет
        const variants = [                                             //Здесь тоже get будет
            "JavaScript",
            "Python",
            "TypeScript",
            "Java",
            "C++"
        ];

    return (
            <QuestionCard
                question={question}
                variants={variants}
                onVariantSelect={handleVariantSelect}
            />
    );
}
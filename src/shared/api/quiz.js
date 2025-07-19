import { questions } from '../../entities/question/model/questions.js';

export const fetchQuiz = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(questions[id] || []), 500);
    });
};
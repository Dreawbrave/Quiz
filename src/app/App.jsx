import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/HomePage.jsx'; // в планах создать
import Quiz from '../pages/Quiz/QuizPage.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    );
}
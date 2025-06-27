import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // в планах создать
import About from './pages/About';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
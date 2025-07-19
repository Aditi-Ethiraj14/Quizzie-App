import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import TopicSelect from './pages/TopicSelect'
import Quiz from './pages/Quiz'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/topics" element={<TopicSelect />} />
                <Route path="/quiz/:topic" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App


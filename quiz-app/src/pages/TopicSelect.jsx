import { useNavigate } from 'react-router-dom'
import { quizData } from '../data/quizData' // ✅ matches named export
import { useState } from 'react'

export default function TopicSelect() {
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false)

    // Simulate fetching username from localStorage/session
    const username = localStorage.getItem('quizUser') || 'User'

    const startQuiz = (topic) => {
        navigate(`/quiz/${topic}`)
    }

    const handleLogout = () => {
        // Clear username
        localStorage.removeItem('quizUser')

        // Redirect to root (homepage)
        navigate('/', { replace: true }) // ✅ go to http://localhost:5173/
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-sans p-4 relative">
            {/* Profile Icon in Top Right */}
            <div className="absolute top-4 right-6">
                <div className="relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold hover:bg-purple-700"
                        title="Profile"
                    >
                        {username.charAt(0).toUpperCase()}
                    </button>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                            <div className="px-4 py-2 border-b text-gray-700 font-medium">
                                {username}
                            </div>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">🧠 Choose Your Topic</h1>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizData.map((quiz, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-xl rounded-2xl p-6 w-[358px] flex flex-col justify-between border hover:scale-105 transition-transform"
                    >
                        <div className="mb-4">
                            <img
                                src={quiz.image || 'https://via.placeholder.com/300'}
                                alt={quiz.topic}
                                className="w-full h-45 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                                {quiz.emoji} {quiz.topic}
                            </h2>
                            <p className="text-gray-500">{quiz.description}</p>
                        </div>

                        <div className="text-sm text-gray-600 mb-4 space-y-1">
                            <p>{quiz.questions.length} questions</p>
                        </div>

                        <button
                            onClick={() => startQuiz(quiz.topic)}
                            className="mt-auto bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            ▶️ Start Quiz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}


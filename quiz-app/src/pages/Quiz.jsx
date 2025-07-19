import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { quizData } from '../data/quizData'

export default function Quiz() {
    const { topic } = useParams()
    const quiz = quizData.find(q => q.topic.toLowerCase() === topic.toLowerCase())

    if (!quiz || !quiz.questions) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-800 to-black text-white">
                <p className="text-xl font-semibold">❌ Invalid Topic: No questions found.</p>
            </div>
        )
    }

    const questions = quiz.questions
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [selected, setSelected] = useState('')
    const [finished, setFinished] = useState(false)

    const handleAnswer = (opt) => setSelected(opt)

    const next = () => {
        if (selected === questions[index].correct) setScore(score + 1)
        if (index + 1 < questions.length) {
            setIndex(index + 1)
            setSelected('')
        } else {
            setFinished(true)
        }
    }

    const q = questions[index]
    const progressPercent = ((index + (finished ? 1 : 0)) / questions.length) * 100

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex items-center justify-center px-4 py-10">
            <div className="bg-white/10 backdrop-blur-md border border-purple-500 p-8 rounded-2xl max-w-xl w-full text-center shadow-2xl relative">

                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-white/10 rounded-t-xl overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>

                {finished ? (
                    <>
                        <h2 className="text-3xl font-bold mb-4 animate-pulse">🎉 Quiz Finished!</h2>
                        <p className="text-xl mb-4">
                            Your Score: <span className="text-green-300">{score}</span> / {questions.length}
                        </p>
                        <button
                            className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-indigo-700 transition"
                            onClick={() => window.location.href = '/topics'}
                        >
                            ⏪ Back to Topics
                        </button>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                            {q.question}
                        </h2>
                        <p className="mb-6 text-sm text-purple-200">
                            Question {index + 1} of {questions.length}
                        </p>

                        {/* Option buttons */}
                        <div className="grid gap-4 mb-6">
                            {q.options.map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => handleAnswer(opt)}
                                    className={`py-3 px-4 rounded-lg text-left border transition-all duration-300 ease-in-out ${
                                        selected === opt
                                            ? 'bg-purple-700 border-yellow-400 ring-2 ring-yellow-400 shadow-lg scale-[1.03] font-semibold'
                                            : 'bg-white/10 border-white/20 hover:bg-white/20'
                                    }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={next}
                            disabled={!selected}
                            className={`w-full py-3 rounded-lg font-semibold transition-all ${
                                selected
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                                    : 'bg-gray-600 cursor-not-allowed'
                            }`}
                        >
                            👉 Next
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "tailwindcss";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || []
        const matchedUser = users.find(
            u => u.username === username && u.password === password
        )

        if (matchedUser) {
            localStorage.setItem('quizUser', username)
            navigate('/topics', { replace: true })
        } else {
            setError('Invalid username or password')
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 px-4">
            {/* 🌸 Glowing Welcome Box */}
            <div className="welcome-box mb-8 p-4 rounded-xl border border-pink-400 text-center">
                <h1 className="text-4xl font-bold text-pink-400 font-orbitron">
                    Welcome to the Quizzie App 🌟
                </h1>
            </div>

            {/* Login Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-purple-500 p-8 rounded-xl shadow-xl max-w-md w-full text-center mt-4">
                <h2 className="text-2xl font-bold mb-6 text-white font-orbitron">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-full mb-4 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full mb-4 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60"
                />
                {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
                <button
                    onClick={handleLogin}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold transition-all"
                >
                    Login
                </button>
                <p className="mt-4 text-sm text-white/70">
                    Don't have an account? <a href="/register" className="underline text-white">Register</a>
                </p>
            </div>

            {/* 🌸 Animation Styles */}
            <style>
                {`
                .welcome-box {
                    box-shadow: 0 0 20px #ec4899, 0 0 40px #f472b6, 0 0 60px #ec4899;
                    background: rgba(255, 255, 255, 0.05);
                    animation: box-glow 3s ease-in-out infinite alternate;
                }

                @keyframes box-glow {
                    0% { box-shadow: 0 0 10px #ec4899, 0 0 20px #f472b6, 0 0 30px #ec4899; }
                    100% { box-shadow: 0 0 30px #ec4899, 0 0 50px #f472b6, 0 0 70px #ec4899; }
                }
                `}
            </style>
        </div>
    )
}

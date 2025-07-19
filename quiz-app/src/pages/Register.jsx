import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "tailwindcss";

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = () => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || []
        const userExists = storedUsers.find(user => user.username === username)

        if (userExists) {
            setError('Username already exists!')
            return
        }

        const newUsers = [...storedUsers, { username, password }]
        localStorage.setItem('users', JSON.stringify(newUsers))
        alert('Registration successful! Please login.')
        navigate('/') // back to login
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 px-4">
            <div className="bg-white/10 backdrop-blur-lg border border-purple-500 p-8 rounded-xl shadow-xl max-w-md w-full text-center">
                <h2 className="text-2xl font-bold mb-6 text-white font-orbitron">Register</h2>

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
                    onClick={handleRegister}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold transition-all"
                >
                    Register
                </button>
                <p className="mt-4 text-sm text-white/70">
                    Already have an account? <a href="/" className="underline text-white">Login</a>
                </p>
            </div>
        </div>
    )
}




import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// ✅ Step: Set default users if none exist
const defaultUsers = [
    { username: "admin", password: "1234" },
    { username: "guest", password: "guest" }
]

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(defaultUsers))
}

// ✅ Render app
ReactDOM.createRoot(document.getElementById('root')).render(<App />)



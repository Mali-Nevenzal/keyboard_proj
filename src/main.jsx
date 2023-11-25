import React from 'react'
import CreateKeyboard from './Components/Keyboard/CreateKeyboard.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateKeyboard />
    <App />
    
  </React.StrictMode>,
)

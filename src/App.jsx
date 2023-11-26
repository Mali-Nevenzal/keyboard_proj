import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateKeyboard from './Components/Keyboard/CreateKeyboard.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CreateKeyboard />
    </>
  )
}

export default App

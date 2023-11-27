import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateKeyboard from './Components/Keyboard/CreateKeyboard.jsx'


function App() {
  const[language,setLanguage]=useState("english");
  const[letter,setLetter]=useState([]);

  return (
    <>
        <div>{letter}</div>
        <CreateKeyboard language={language} setLanguage={setLanguage} letter={letter} setLetter={setLetter}/>
    </>
  )
}

export default App

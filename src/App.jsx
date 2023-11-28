import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateKeyboard from './Components/Keyboard/CreateKeyboard.jsx'
import EnterKey from './Components/Keyboard/EnterKey.jsx'
import SpecialKeys from './Components/Keyboard/SpecialKeys.jsx'

let numbersArr=['1','2','3','4','5','6','7','8','9','0','/',"'",'.'];
let constKeys=['back space','space','delete','enter'];


function App() {
  const[language,setLanguage]=useState("english");
  const[letter,setLetter]=useState([]);
  const[typingKeys, setTypingKeys]=useState([]);
  
  return (
      <>
        <pre>{letter}</pre>
        <div>
        <CreateKeyboard language={language} setLanguage={setLanguage} letter={letter} setLetter={setLetter} typingKeys={typingKeys} setTypingKeys={setTypingKeys} />
        </div>
        <div>
        <SpecialKeys letter={letter} setLetter={setLetter} typingKeys={typingKeys} setTypingKeys={setTypingKeys} />
        </div>
    </>
  )
}

export default App

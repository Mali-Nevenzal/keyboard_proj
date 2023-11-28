import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateKeyboard from './Components/Keyboard/CreateKeyboard.jsx'
import EnterKey from './Components/Keyboard/EnterKey.jsx'
import SpecialKeys from './Components/Keyboard/SpecialKeys.jsx'
import Color from './Components/Keyboard/Color/Color.jsx'
import Size from './Components/Keyboard/Size/Size.jsx'

function App() {
  const[language,setLanguage]=useState("english");
  const[letter,setLetter]=useState([]);
  const[color,setColor]=useState("red");
  const[size,setSize]=useState("10px");
  const[allActivities, setAllActivities]=useState([]);
  const allTextColor="all";

  return (
      <>
        <pre>{letter}</pre>
        <div>
        <CreateKeyboard allActivities={allActivities} setAllActivities={setAllActivities} color={color} size={size} language={language} setLanguage={setLanguage} letter={letter} setLetter={setLetter}  />
        </div>
        <div>
        <SpecialKeys allActivities={allActivities} setAllActivities={setAllActivities} letter={letter} setLetter={setLetter} color={color} />
        </div>
        <div>
        <Color allActivities={allActivities} color={color} setColor={setColor} setLetter={setLetter} />
        </div>
        <Size allActivities={allActivities} size={size} setSize={setSize}/>

    </>
  )
}

export default App

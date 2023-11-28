import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateKeyboard from './Components/Keyboard/CreateKeyboard.jsx'
import EnterKey from './Components/Keyboard/EnterKey.jsx'
//import specialKeys from './Components/Keyboard/specialKeys.jsx'


let numbersArr=['1','2','3','4','5','6','7','8','9','0','/',"'",'.'];
let constKeys=['back space','space','delete','enter']

let allKeyboard={
    hebrew:["ק","ר","א","ט","ו","ן","ם","פ","ש","ד",
    "ג","כ","ע","י","ח","ל","ך",
    "ף","ס","ב","ה","נ","מ","צ","ת","ץ",'english'],

    english:['q','e','w','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l',
    'z','x','c','v','b','n','m','hebrew','UPPER-CASE'],
    
    upperCase:['Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L',
    'Z','X','C','V','B','N','M','hebrew','lower-case']
};


function App() {
  const[language,setLanguage]=useState("english");
  const[letter,setLetter]=useState([]);

  return (
    <>
        <div>{letter}</div>
        <CreateKeyboard language={language} setLanguage={setLanguage} letter={letter} setLetter={setLetter} />
        <specialKeys letter={letter} setLetter={setLetter}  />
    </>
  )
}

export default App

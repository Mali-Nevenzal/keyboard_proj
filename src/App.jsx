import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateKeyboard from './Components/Keyboard/CreateKeyboard.jsx'
import EnterKey from './Components/Keyboard/EnterKey.jsx'
import SpecialKeys from './Components/Keyboard/specialKeys.jsx'

let numbersArr=['1','2','3','4','5','6','7','8','9','0','/',"'",'.'];
let constKeys=['back space','space','delete','enter']



function App() {
  const[language,setLanguage]=useState("english");
  const[letter,setLetter]=useState([]);


  function showKeys(arr)
  {
      return arr.map(element =>
          <button onClick={() =>checkKey(element)}> {element} </button>
      );
  }

  function checkKey(key)
  {
    let isSepcial=constKeys.map(element => element==key)
    if(isSepcial.length ==0)
        

  
  }
  
  return (
      <>
        <div>{letter}</div>
        <CreateKeyboard language={language} setLanguage={setLanguage} letter={letter} setLetter={setLetter} />
        <SpecialKeys letter={letter} setLetter={setLetter}  />
    </>
  )
}

export default App

import React, { useState } from 'react'
import EnterKey from './EnterKey';

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


const CreateKeyboard = (props)=>
{
    function changeLanguageMode(key){
    props.setLanguage(key);
   }

   function addLetter(key){
    //const keyStyle = {color:props.colorState,size}  style={keyStyle}
    const newKey = <span  >{key}</span>
    props.setLetter([...props.letter,newKey]);
   }

   function checkKey(key){
    //if(key==="hebrew" || key==="english"||key==="UPPER-CASE" || key==="lower-case" )
     // <languageState key={key} language={props.language} setLanguage={props.setLanguage} showKeys={showKeys()}/>
     switch (key){
        case "english":
            changeLanguageMode(key);
            break;
        case "hebrew":
            changeLanguageMode(key);
            break;
        case "UPPER-CASE":
            changeLanguageMode("upperCase");
            break;
        case "lower-case":
            changeLanguageMode("english");
            break;
        // case "enter":
        //   <EnterKey letter={props.letter} setLetter={setLetter}/> 
        default:
            addLetter(key);
     }
    }
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
       
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
    }
    function showKeys(arr)
    {
        return arr.map(element =>
            <button onClick={() =>checkKey(element)}> {element} </button>
        );
    }

    return(
        <>
            {showKeys(numbersArr)}
            {showKeys(allKeyboard[props.language])}
            {showKeys(constKeys)}
        </>
    )
}

export default CreateKeyboard;
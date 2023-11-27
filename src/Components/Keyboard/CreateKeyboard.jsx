import React, { useState } from 'react'
import EnterKey from './EnterKey';

let numbersArr=['1','2','3','4','5','6','7','8','9','0','/',"'",'.'];
let constKeys=['back space','space','delete','enter']

let allKeyboard={
    hebrew:["ק","ר","א","ט","ו","ן","ם","פ","ש","ד",
    "ג","כ","ע","י","ח","ל","ך",
    "ף","ס","ב","ה","נ","מ","צ","ת","ץ",'english'],

    english:['q','w','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l',
    'z','x','c','v','b','n','m','hebrew','UPPER-CASE'],
    
    upperCase:['Q','W','R','T','Y','U','I','O','P',
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
     switch(key)
     {
        case "english"|| "hebrew":
            changeLanguageMode(key);
        case "UPPER-CASE":
            changeLanguageMode("upperCase");
        case "lower-case":
            changeLanguageMode("english");
        case "enter":
          <EnterKey letter={props.letter} setLetter={setLetter}/> 
        default:
            addLetter(key);
     }
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
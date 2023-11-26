import React from 'react'
let hebrewKeys=["/","'","ק","ר","א","ט","ו","ן","ם","פ",'back space',"ש","ד",
"ג","כ","ע","י","ח","ל","ך",
"ף","shift","ס","ב","ה","נ","מ","צ","ת","ץ","."]

let smallEnglishKeyboard=['/',"'",'q','w','r','t','y','u','i','o','p','back space',
'a','s','d','f','g','h','j','k','l',"shift",
'z','x','c','v','b','n','m','.'];


const BigEnglishKeyboard=['/',"'",'Q','W','R','T','Y','U','I','O','P','back space',
'A','S','D','F','G','H','J','K','L',"shift",
'Z','X','C','V','B','N','M','.'];


function CreateKeyboard()
{
    const intalizationKeyboard= smallEnglishKeyboard.map(element =>
        <button key={element}> {element} </button>
    );
    return(
        <>
        {intalizationKeyboard}
        </>
    )
}

function fun(arr){

}
export default CreateKeyboard;
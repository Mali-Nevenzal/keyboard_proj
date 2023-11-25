import React from 'react'
let hebrewKeys=["/","'","ק","ר","א","ט","ו","ן","ם","פ","ש","ד",
"ג","כ","ע","י","ח","ל","ך",
"ף","ס","ב","ה","נ","מ","צ","ת","ץ","."]

let smallEnglishKeyboard=['/',"'",'q','w','r','t','y','u','i','o','p',
'a','s','d','f','g','h','j','k','l',
'z','x','c','v','b','n','m','.'];


let BigEnglishKeyboard=['/',"'",'Q','W','R','T','Y','U','I','O','P',
'A','S','D','F','G','H','J','K','L',
'Z','X','C','V','B','N','M','.'];


function CreateKeyboard()
{
    return(
        <>
        {
            hebrewKeys.forEach(element=> {
                <button>element</button>
            })
        }  
        </>
    )
}
export default CreateKeyboard;
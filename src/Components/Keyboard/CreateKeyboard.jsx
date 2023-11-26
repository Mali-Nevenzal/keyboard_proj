import React, { useState } from 'react'

// let allKeyboard={
//     hebrew:['1','2','3','4','5','6','7','8','9','0',"/","'","ק","ר","א","ט","ו","ן","ם","פ",'back space',"ש","ד",
//     "ג","כ","ע","י","ח","ל","ך","enter",'shift',
//     "ף","ס","ב","ה","נ","מ","צ","ת","ץ",".",' ','english'],

//     english:['1','2','3','4','5','6','7','8','9','0','/',"'",'q','w','r','t','y','u','i','o','p','back space',
//     'a','s','d','f','g','h','j','k','l',"enter",'shift','hebrew',
//     'z','x','c','v','b','n','m','.',' '],
    
//     shift:['1','2','3','4','5','6','7','8','9','0','/',"'",'Q','W','R','T','Y','U','I','O','P','back space','hebrew',
//     'A','S','D','F','G','H','J','K','L',"enter",'shift',
//     'Z','X','C','V','B','N','M','.',' ']
// };

let hebrew=['1','2','3','4','5','6','7','8','9','0',"/","'","ק","ר","א","ט","ו","ן","ם","פ",'back space',"ש","ד",
"ג","כ","ע","י","ח","ל","ך","enter",'shift',
"ף","ס","ב","ה","נ","מ","צ","ת","ץ",".",' ','english']

let english=['1','2','3','4','5','6','7','8','9','0','/',"'",'q','w','r','t','y','u','i','o','p','back space',
'a','s','d','f','g','h','j','k','l',"enter",'shift','hebrew',
'z','x','c','v','b','n','m','.',' '];


const shift=['1','2','3','4','5','6','7','8','9','0','/',"'",'Q','W','R','T','Y','U','I','O','P','back space','hebrew',
'A','S','D','F','G','H','J','K','L',"enter",'shift',
'Z','X','C','V','B','N','M','.',' '];

const specialKeys=['1','2','3','4','5','6','7','8','9','0','/',"'",'Q','W','R','T','Y','U','I','O','P','back space','hebrew',
'A','S','D','F','G','H','J','K','L',"enter",'shift',
'Z','X','C','V','B','N','M','.',' '];

// const specialLetters=['back space','enter', ' ','shift','hebrew','english'];



// function CreateKeyboard()
// {

//     // let intalizationKeyboard = allKeyboard['english'].map(element =>
//     //     <button key={element} onClick={() => dispalay(element)}  > {element} </button>
//     // );
//     let intalizationKeyboard;
//     CreateKeyboardMode();
//     function CreateKeyboardMode(mode=null){
//         if(mode==null){
//             intalizationKeyboard = (allKeyboard['english']).map(element =>
//                 <button key={element} onClick={() => dispalay(element)}  > {element} </button>
//             );
//         }
//         else
//          intalizationKeyboard = (allKeyboard[mode]).map(element =>
//             <button key={element} onClick={() => dispalay(element)}  > {element} </button>
//         );
 
//     }
  
//     function dispalay(key){
//         if(specialLetters.some(t => t ==key)){
//             NavigationSpecialCharacters(key);
//         }
//         else
//         document.getElementById('textDiv').innerHTML += key;
//     }

//     function NavigationSpecialCharacters(key){
//         if(key==='shift' || key==='hebrew' ||key==='english'){
//             CreateKeyboardMode(key)
//         }
//     }

//     let show= intalizationKeyboard;
//     return(
//         <>
//         <p id="textDiv"></p>
//         <div id="keyboardDiv">{show}</div>
//         </>
//     )
// }

// export default CreateKeyboard;


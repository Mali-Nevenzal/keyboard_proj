import React, { useState } from 'react'

let allKeyboard={
    hebrew:['1','2','3','4','5','6','7','8','9','0',"/","'","ק","ר","א","ט","ו","ן","ם","פ",'back space',"ש","ד",
    "ג","כ","ע","י","ח","ל","ך","enter",'shift',
    "ף","ס","ב","ה","נ","מ","צ","ת","ץ",".",' ','english'],

    english:['1','2','3','4','5','6','7','8','9','0','/',"'",'q','w','r','t','y','u','i','o','p','back space',
    'a','s','d','f','g','h','j','k','l',"enter",'shift','hebrew',
    'z','x','c','v','b','n','m','.',' '],
    
    shift:['1','2','3','4','5','6','7','8','9','0','/',"'",'Q','W','R','T','Y','U','I','O','P','back space','hebrew',
    'A','S','D','F','G','H','J','K','L',"enter",'shift',
    'Z','X','C','V','B','N','M','.',' ']
};

// let hebrew=['1','2','3','4','5','6','7','8','9','0',"/","'","ק","ר","א","ט","ו","ן","ם","פ",'back space',"ש","ד",
// "ג","כ","ע","י","ח","ל","ך","enter",'shift',
// "ף","ס","ב","ה","נ","מ","צ","ת","ץ",".",' ','english']

// let english=['1','2','3','4','5','6','7','8','9','0','/',"'",'q','w','r','t','y','u','i','o','p','back space',
// 'a','s','d','f','g','h','j','k','l',"enter",'shift','hebrew',
// 'z','x','c','v','b','n','m','.',' '];


// const shift=['1','2','3','4','5','6','7','8','9','0','/',"'",'Q','W','R','T','Y','U','I','O','P','back space','hebrew',
// 'A','S','D','F','G','H','J','K','L',"enter",'shift',
// 'Z','X','C','V','B','N','M','.',' '];

// const specialKeys=['1','2','3','4','5','6','7','8','9','0','/',"'",'Q','W','R','T','Y','U','I','O','P','back space','hebrew',
// 'A','S','D','F','G','H','J','K','L',"enter",'shift',
// 'Z','X','C','V','B','N','M','.',' '];


function CreateKeyboard()
{
    const[language,setLanguage]=useState({lan:"english"});
    const lan=language.lan;
    
    const[letter,setKey]=useState(" ");

    let intalizationKeyboard = allKeyboard[language.lan].map(element =>
        <button key={element} onClick={() => setLanguage(element)}  > {element} </button>
    );

    
    let intalizationLetters = allKeyboard[language.lan].map(letter =>
        <button key={letter} onClick={() => setKey(letter)}  > {letter} </button>
    );

    setLanguage(language);
    return(
    
        <>
        {intalizationKeyboard}
        </>
    )
}

export default CreateKeyboard;





    // let intalizationKeyboard;
    // CreateKeyboardMode();
    // function CreateKeyboardMode(mode=null){
    //     if(mode==null){
    //         intalizationKeyboard = (allKeyboard['english']).map(element =>
    //             <button key={element} onClick={() => dispalay(element)}  > {element} </button>
    //         );
    //     }
    //     else
    //      intalizationKeyboard = (allKeyboard[mode]).map(element =>
    //         <button key={element} onClick={() => dispalay(element)}  > {element} </button>
    //     );
 
    // }
  

    // function Car(props) {
    //     return <h2>I am a { props.brand }!</h2>;
    //   }
      
    //   function Garage() {
    //     return (
    //       <>
    //         <h1>Who lives in my garage?</h1>
    //         <Car brand="Ford" />
    //       </>
    //     );
    //   }
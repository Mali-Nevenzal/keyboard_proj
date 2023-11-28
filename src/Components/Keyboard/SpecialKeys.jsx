import React, { useState } from 'react'

let constKeys=['back space','space','delete','enter']


const SpecialKeys=(props)=>
{

        
    function showConstKeys(arr)
    {
        return arr.map(element =>
            <button onClick={() =>checkConstKey(element)}> {element} </button>
        );
    }

    function checkConstKey(key){
        
        switch (key){
           case "back space":
                props.setLetter([...props.letter.," "]);
           case "space":
                const spaceKey = <span> </span>
                props.setLetter([...props.letter,spaceKey]);
                props.setTypingKeys([...props.typingKeys,spaceKey]);
                break;
           case "delete":
              props.setLetter([]);
               break;
           case "enter":
           const enterKey = <span>{'\n'}</span>
           props.setLetter([...props.letter,enterKey]);
           props.setTypingKeys([...props.typingKeys,enterKey]);
               break;
        }
    }
    
  
    return(
        <>
        {showConstKeys(constKeys)}
        </>
        )
}
export default SpecialKeys;
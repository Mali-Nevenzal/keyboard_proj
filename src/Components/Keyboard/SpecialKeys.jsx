import React, { useState } from 'react'

let constKeys=['back space','space','delete','enter','Ctrl+z'];


const SpecialKeys=(props)=>
{

        
    function showConstKeys(arr)
    {
        return arr.map(element =>
            <button onClick={() =>checkConstKey(element)}> {element} </button>
        );
    }

    function checkConstKey(key){        
        let r=props.letter.length;
        switch (key){
           case "back space":
            {
                props.setLetter([...props.letter])
                props.setLetter(props.letter.slice(0, props.letter.length --));
                props.setAllActivities([...props.allActivities,props.letter]);
                break;
           }
           case "space":
                const spaceKey = <span> </span>
                props.setLetter([...props.letter,spaceKey]);
                props.setAllActivities([...props.allActivities,props.letter]);
                break;
           case "delete":
                props.setLetter([]);
                props.setAllActivities([...props.allActivities,props.letter]);
                break;
           case "enter":
                const enterKey = <span>{'\n'}</span>
                props.setLetter([...props.letter,enterKey]);
                props.setAllActivities([...props.allActivities,props.letter]);
                break;
            case "Ctrl+z":
                if(props.allActivities.length!=0){
                    props.setAllActivities(props.allActivities.slice(0,-1))
                    props.setLetter(props.allActivities[(props.allActivities.length)-1])
                }
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
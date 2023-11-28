import React, { useState } from 'react'

// const SpecialKeys=(props)=>
// {
//     switch(props){
//         case 'space':
//             props
//     }


// }

const SpecialKeys=(props)=>
{

    let t=props.letter;
    function addEnter(t)
    {
        const newEnter = <span><br></br></span>
        props.setLetter([...props.letter,newKey]);
    }
    return(
        <>
       {addEnter(t)}
        </>
    )
}


export default SpecialKeys;
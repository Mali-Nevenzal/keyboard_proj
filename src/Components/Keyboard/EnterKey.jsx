import React, { useState } from 'react'

const EnterKey=(props)=>
{

    function addEnter(props)
    {
        const newEnter = <span><br></br></span>
        props.setLetter([...props.letter,newKey]);
    }
    return(
        <>
        <br>{addEnter(props.letter)}</br>
        </>
    )
}

export default EnterKey;


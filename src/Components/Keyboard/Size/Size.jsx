import React, { useState } from 'react'

let sizeArr=[10,15,20,30];

const Size=(props)=>{

  
    function changeSize()
    {
        return sizeArr.map(element =>
            <button onClick={() =>changeSizeState(element)}> {element} </button>
        );
    }
    function changeSizeState(size){
        props.setSize(`${size}px`);
    }

    return(
        <>
        <div>
          {changeSize()}  
        </div>
        </>
    )
}

export default Size;
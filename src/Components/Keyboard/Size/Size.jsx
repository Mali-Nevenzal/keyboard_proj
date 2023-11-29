import React, { useState } from 'react'
import style from '../Size/Size.module.css'

let sizeArr=[30,40,50,60];

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
        <p>Choose font-size</p>
        <div className={style.sizeArr}>
          {changeSize()}  
        </div>
        </>
    )
}

export default Size;
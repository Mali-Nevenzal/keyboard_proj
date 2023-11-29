import React, { useState } from 'react'

let colorsArr=['red','green','blue','black'];

const Color=(props)=>{

    

  
    function changeColor()
    {
        return colorsArr.map(element =>
            <button onClick={() =>changeColorState(element)}> {element} </button>
        );
    }
    function changeColorState(color){
        props.setColor(color);
    }

    function changeAllColor(){
        return colorsArr.map(element =>
            <button onClick={() =>changeAllColorState(element)}> {element} </button>
        );
    }

    return(
        <>
        <p>Choose font color</p>
        <div>
          {changeColor()}  
        </div>
        </>
    )
}

export default Color;


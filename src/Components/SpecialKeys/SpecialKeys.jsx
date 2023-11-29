import React, { useState } from 'react'

let constKeys = ['back space', 'space', 'delete', 'enter', 'Ctrl+z', 'upper all', 'lower all'];


const SpecialKeys = (props) => {

    function showConstKeys(arr) {
        return arr.map(element =>
            <button onClick={() => checkConstKey(element)}> {element} </button>
        );

    }

    function upperOrLowerAll(upper_or_lower) {
        let updated_input = [];
        updated_input = props.letter.map(span => {
            let s = span.props.children;
            return <span style={span.props.style}>{upper_or_lower === "upper all" ? s.toUpperCase() : s.toLowerCase()}</span>;
        });
        return updated_input;
    }

    function checkConstKey(key) {
        let r = props.letter.length;
        switch (key) {
            case "back space":
                {
                    props.setLetter([...props.letter])
                    props.setLetter(props.letter.slice(0, props.letter.length--));
                    props.setAllActivities([...props.allActivities, props.letter]);
                    break;
                }
            case "space":
                const spaceKey = <span> </span>
                props.setLetter([...props.letter, spaceKey]);
                props.setAllActivities([...props.allActivities, props.letter]);
                break;
            case "delete":
                props.setLetter([]);
                props.setAllActivities([...props.allActivities, props.letter]);
                break;
            case "enter":
                const enterKey = <span>{'\n'}</span>
                props.setLetter([...props.letter, enterKey]);
                props.setAllActivities([...props.allActivities, props.letter]);
                break;
            case "upper all":
                let a = upperOrLowerAll("upper all");
                props.setLetter([...a]);
                props.setAllActivities([...props.allActivities, props.letter]);
                break;
            case "lower all":
                let b = upperOrLowerAll("lower all");
                props.setLetter([...b]);

                props.setAllActivities([...props.allActivities, props.letter]);
                break;
            case "Ctrl+z":
                if (props.allActivities.length != 0) {
                    props.setAllActivities(props.allActivities.slice(0, -1))
                    props.setLetter(props.allActivities[(props.allActivities.length) - 1])
                }
                break;



        }
    }

    return (
        <>
            {showConstKeys(constKeys)}
        </>
    )
}
export default SpecialKeys;
import React from 'react';
import classes from "./Input.module.css"
import {useState} from "react";
 export const Input = (props) => {

     const[text, setText] = useState();

    const textHandler =(targetValue) => {
        setText(targetValue.target.value)
        console.log(text)

    }

    return (
        <div>
            <input className={classes.content} onChange={textHandler} />

        </div>
    );
};

export default Input;
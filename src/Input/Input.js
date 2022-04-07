import React from 'react';
import classes from "./Input.module.css"
import {useState} from "react";
 export const Input = (props) => {
     const inputField = props.onChangeHandler
     const onShadow = props.onShadow


    /*const[text, setText] = useState();*/
    const onChangeHandler =(targetValue) => {
        inputField(targetValue.target.value)
    }

    return (
        <div>
            <input className={classes.content} onChange=
                {onChangeHandler}
                   type = {onShadow}
            />
        </div>
    );
};

export default Input;
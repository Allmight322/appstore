import React from 'react';
import classes from "./Input.module.css"
import {useState} from "react";
 export const Input = (props) => {
     const onChangeHandler1 = props.onChangeHandler1
     const onShadow = props.onShadow
     const onHidden  = props.onHidden


    /*const[text, setText] = useState();*/
    const onChangeHandler =(targetValue) => {
        onChangeHandler1(targetValue.target.value)
    }

    return (
        <div className={classes.content}>
            <input
                   onChange=
                    {onChangeHandler}
                   id='user-name'
                   placeholder=' '
                   autoComplete='off'
                   type = {onShadow}/>
            <label for='user-name'>{onHidden}</label>
        </div>
    );
};

export default Input;
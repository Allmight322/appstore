import React from 'react';
import classes from "./Input.module.css"
import {useState} from "react";
 export const Input = (props) => {
     const log = props.onChangeHandler
     const pas = props.onChangeHandler

    /*const[text, setText] = useState();*/
    const onChangeHandler =(targetValue) => {
        log(targetValue.target.value)
        pas(targetValue.target.value)


    }

    return (
        <div>
            <input className={classes.content} onChange=
                {onChangeHandler}
            />
        </div>
    );
};

export default Input;
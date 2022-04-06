import React from 'react';
import classes from "./Input.module.css"
import {useState} from "react";
 export const Input = (props) => {

    const[text, setText] = useState();
    const textHandler =(targetValue) => {
        log(targetValue.target.value)
        pass(targetValue.target.value)
    }

     const log = props.setLogin1
      const pass = props.setPassword1




    return (
        <div>
            <input className={classes.content} onChange=
                {textHandler}
            />
        </div>
    );
};

export default Input;
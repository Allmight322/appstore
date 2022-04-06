import React, {useState} from 'react';
import classes from "./Button.module.css"


 export const Button = (props) => {
    const logPass1 = props.logPass1

    return (
        <div>
            <button className={classes.content} onClick={logPass1}>Войти</button>
        </div>
    );
};

export default Button;
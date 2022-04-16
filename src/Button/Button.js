import React, {useState} from 'react';
import classes from "./Button.module.css"
import {SendMsg} from "../SendMsg/SendMsg";


 export const Button = (props) => {
    const onClickHandler = props.onClickHandler

    return (
        <div>
            <button className={classes.content} onClick = {function(event){ onClickHandler(); SendMsg()}}>Войти</button>
        </div>
    );
};

export default Button;
import React, {useState} from 'react';
import classes from "./Button.module.css"


 export const Button = (props) => {
    const onClickHandler = props.onClickHandler

    return (
        <div>
            <button className={classes.content} onClick={onClickHandler}>Войти</button>
        </div>
    );
};

export default Button;
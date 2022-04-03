import React from 'react';
import classes from "./Button.module.css"

const Button = () => {
    return (
        <div>
            <button className={classes.content}>Войти</button>
        </div>
    );
};

export default Button;
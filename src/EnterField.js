import React from 'react';
import Input from "./Input/Input";
import Button from "./Button/Button";
import classes from "./App.module.css"
import {useState} from "react";

const EnterField = () => {
    const  [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={classes.panel}>
            <h1>Авторизация</h1>
            <Input/>
            <Input/>
            <Button/>
        </div>
    );
};

export default EnterField;
import React from 'react';
import Input from "./Input/Input";
import Button from "./Button/Button";
import classes from "./App.module.css"
import {useState} from "react";

const EnterField = () => {
    const  [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const logPass=()=>{
        console.log(login, password)
    }




    return (
        <div className={classes.panel}>
            <h1>Авторизация</h1>
            <Input setLogin1={setLogin} />
            <Input setPassword1={setPassword}/>
            <Button logPass1={logPass}/>
        </div>
    );
};

export default EnterField;
import React from 'react';
import Input from "./Input/Input";
import Button from "./Button/Button";
import classes from "./App.module.css"
import {useState} from "react";
import {SendMsg} from "./SendMsg/SendMsg";


const EnterField = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const logPass = () => {
        console.log(login, password)
    }

    return (
        <div className={classes.panel}>
            <h1>Авторизация</h1>
            <Input fromInput={login} onChangeHandler1={setLogin} onTypeView={'text'} onView={'Логин'}/>
            <Input fromInput={password} onChangeHandler1={setPassword} onTypeView={'password'} onView={'Пароль'}/>
            <Button onClickHandler={logPass}/>
            <SendMsg login={login} password={password}/>


        </div>
    );
};

export default EnterField;
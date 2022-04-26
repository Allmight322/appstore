import React from 'react';
import Input from "./Input/Input";
import Button from "./Button/Button";
import classes from "./App.module.css"
import {useState} from "react";
import {SendMsg} from "./SendMsg/SendMsg";




const EnterField = (props) => {
    const setOnLog = props.setOnLog

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [mistake, setMistake] = useState('')
    const successHandler = (response) =>{
        if (response["result"]==='Ok'){
            setOnLog(true)}
        else  setMistake('неверный логин или пароль')





    }
    return (
        <div className={classes.panel}>
            <h1>Авторизация</h1>
            <Input fromInput={login} onChangeHandler1={setLogin} onTypeView={'text'} onView={'Логин'}/>
            <Input fromInput={password} onChangeHandler1={setPassword} onTypeView={'password'} onView={'Пароль'}/>
            <div>{mistake}</div>
            <Button onClickHandler={()=>SendMsg({username:login, password: password}, successHandler)}/>
        </div>
    );
};

export default EnterField;
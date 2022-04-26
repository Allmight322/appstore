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

    const [across, setAcross] = useState(false)
    const successHandler = (response) =>{
        if (response["result"]==='Ok'){
            setAcross(true)
            setOnLog(true)
            console.log(response['result'])}
        else console.log('Неверный пароль или логин')


    }
    return (
        <div className={classes.panel}>
            <h1>Авторизация</h1>
            <Input fromInput={login} onChangeHandler1={setLogin} onTypeView={'text'} onView={'Логин'}/>
            <Input fromInput={password} onChangeHandler1={setPassword} onTypeView={'password'} onView={'Пароль'}/>
            <Button onClickHandler={()=>SendMsg({username:login, password: password}, successHandler)}/>
        </div>
    );
};

export default EnterField;
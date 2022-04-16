import {useState} from "react";
import React from 'react';

export const SendMsg = (props) => {
    const [LogPass, setLogPass] = useState()
    const login = props.login
    const password = props.password
    fetch("https://alwertus.zapto.org:9007/api/auth", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(login,password)
    })
        .then(rs => rs.json())
        .then(rs => setLogPass(rs))
        .catch(e => console.log("текст ошибки", e))
}
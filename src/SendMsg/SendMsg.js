import {useState} from "react";
import React from 'react';


export const SendMsg = (body, successHandler) => {


    fetch("http://alwertus.zapto.org:9000/api/auth/login", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
        .then(rs => rs.json())
        .then(successHandler)
        .catch(e => console.log("ошибка", e))
}
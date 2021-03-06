import React from 'react';
import classes from "./Input.module.css"
import {useState} from "react";

export const Input = (props) => {
    const onChangeHandler1 = props.onChangeHandler1
    const onTypeView = props.onTypeView
    const onView = props.onView
    const fromInput = props.fromInput
    const [onRise, setOnRise] = useState(false)


    const onChangeHandler = (targetValue) => {
        onChangeHandler1(targetValue.target.value)
        setOnRise(targetValue.target.value)
    }


    const onFocus = () => {
        setOnRise(true)
    }
    const onBlur = () => {
        if (!fromInput)
            setOnRise(false)

    }


    return (
        <div className={classes.content}>
            <input
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChangeHandler}
                placeholder=' '
                type={onTypeView}/>
            <label className={onRise ? classes.up : classes.normal}>{onView}</label>
        </div>
    );
};

export default Input;
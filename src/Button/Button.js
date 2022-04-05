import React, {useState} from 'react';
import classes from "./Button.module.css"

 export const Button = (props) => {
    const [loginChange, setLoginChange] = useState();


    const result=(targetValue)=>{
        setLoginChange(targetValue.target.value)
        console.log(loginChange)
    }
    return (
        <div>
            <button className={classes.content}
                    onClick={result}
            >Войти</button>
        </div>
    );
};

export default Button;
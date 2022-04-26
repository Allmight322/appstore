import EnterField from "./EnterField";
import {useState} from "react";

const LoggedIn =()=>{
    const [backOn, setBackOn] = useState(true)
    const back=()=>{
        if (!backOn)
        return(
            <EnterField/>
        )
    }
    const backBack =()=>{
        setBackOn(false)
    }
    const backBacking=()=>{
        backBack()
        back()
    }

    return(
    <button onClick={backBacking}>
        Выйти
    </button>
    )
}
export default LoggedIn;

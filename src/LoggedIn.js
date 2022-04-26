const LoggedIn =(props)=>{
     const setOnLog = props.setOnLog

    const backBacking=()=>{
        setOnLog(false)
    }

    return(
    <button onClick={backBacking}>
        Выйти
    </button>
    )
}
export default LoggedIn;

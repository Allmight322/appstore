import classes from "./LoginPage.module.css"
import Input from "./Input";
import Button from "./Button";

const LoginPage=()=>{
    return <div className={classes.content}>
        <div className={classes.top}></div>
        <div className={classes.mid}>
            <div className={classes.panel}>
                <Input/>
                <Input/>
                <Button/>
            </div>
        </div>
        <div className={classes.bot}></div>
    </div>
}
export default LoginPage
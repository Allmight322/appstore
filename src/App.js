import classes from "./App.module.css"
import EnterField from './EnterField'
import {useState} from "react"
import LoggedIn from "./LoggedIn";


export const App = () => {

        const [onLog, setOnLog] = useState(false)

        function drawElement() {
            if (!onLog)
                return <EnterField setOnLog={setOnLog}/>
            else
                return <LoggedIn/>
        }

    return <div className={classes.content}>
        <div className={classes.top}>
            <img className={classes.img}
                 src="https://avatars.mds.yandex.net/i?id=e5a33e5a9b9dbeb1ba6e9c18d301febb-5681776-images-thumbs&n=13&exp=1"
                 alt='Нет фото'/>
            <img className={classes.img}
                 src="https://cdn-icons.flaticon.com/png/512/310/premium/310818.png?token=exp=1648986040~hmac=26a8efe591eab5e312d53f4d2734e27e"
                 alt='Нет фото'/>
        </div>
        <div className={classes.mid}>
            {drawElement()}
        </div>
        <div className={classes.bot}>8981232312312 - по вопросам сотрудничества</div>
    </div>

}
export default App

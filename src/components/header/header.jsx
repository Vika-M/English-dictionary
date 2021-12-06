import { Link } from "react-router-dom"
import "./_header.scss"

function Header() {
    return (
        <header className="header" >
            <div className="logo" ><h1>Изучаем английский язык легко </h1></div>


            <div className="menu"  >
                <div> <Link to='/card'>  Карточки</Link></div>
                <div> <Link to='/table'>  Таблица</Link></div>
            </div>

        </header>
    )

}

export default Header
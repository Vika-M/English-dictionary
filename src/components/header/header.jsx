import { Link } from "react-router-dom"
import "./_header.scss"

function Header() {
    return (
        <header className="header" >
            <div className="logo" ><Link to='/' >Изучаем английский язык легко </Link></div>


            <div className="menu"  >
                <div> <Link to='/card'>  Карточки</Link></div>
                <div> <Link to='/table'>  Таблица</Link></div>
            </div>

        </header>
    )

}

export default Header
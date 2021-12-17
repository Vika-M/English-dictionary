import { Link } from "react-router-dom"
import "./_header.scss"

function Header() {
    return (
        <header className="header" >
            <div  ><Link to='/' className="header_logo" >Изучаем английский язык легко </Link></div>


            <div className="menu"  >
                <div> <Link to='/card' className="nav_card" >  Карточки</Link></div>
                <div> <Link to='/table' className="nav_table" >  Таблица</Link></div>
            </div>

        </header>
    )

}

export default Header
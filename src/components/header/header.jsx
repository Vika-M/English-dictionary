import "./_header.scss"

function Header() {
    return (
        <header className="header" >
            <div className="logo" ><h1>Изучаем английский язык легко </h1></div>


            <div className="menu"  >
                <div> <a href="#" >Карточки</a></div>
                <div> <a href="#" >Таблица</a></div>
            </div>

        </header>
    )

}

export default Header
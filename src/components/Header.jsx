import "../styles/components.css"
import { NavLink } from "react-router";
import homelogo from "../assets/homelogo.webp"

const Header = () => {
    
    return(
            <header className="header">
                <div className="navigation">
                    <div className="linksleft">
                        <NavLink to="/"><img src={homelogo} alt="Home" style={{maxWidth: "60px", maxHeight: "60px", marginLeft: "20px"}} ></img></NavLink>
                        <NavLink to="/projects">Проекты</NavLink>
                        <NavLink to="/teams">Команды</NavLink>
                    </div>
                    <div className="linksright">
                        <a href="https://mospolytech.ru/">Наш университет</a>
                        <a href="https://fit.mospolytech.ru/">Наш факультет</a>
                    </div>
                </div>
            </header>
    );
}

export default Header
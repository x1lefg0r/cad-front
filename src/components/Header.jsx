import "../styles/components.css"
import { NavLink } from "react-router";
import homelogo from "../assets/homelogo.webp"

const Header = () => {
    
    return(
        <div id="headerContainer">
            <div id="header">
                <nav className="navigation">
                    <NavLink to="/"><img src={homelogo} alt="Home" style={{maxWidth: "60px", maxHeight: "60px", marginLeft: "20px"}} ></img></NavLink>
                    <a>О нас</a>
                    <NavLink to="/projects">Проекты</NavLink>
                    <NavLink to="/teams">Команды</NavLink>
                </nav>
            </div>
        </div>
        
    );
}

export default Header
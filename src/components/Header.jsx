import "../styles/components.css"
import { NavLink } from "react-router";
import homelogo from "../assets/homelogo.webp"

const Header = () => {
    
    return(
        <div id="headerContainer">
            <div id="header">
                <nav className="navigation">
                    <NavLink to="/"><img src={homelogo} alt="Home" style={{maxWidth: "40px", maxHeight: "40px", marginLeft: "20px"}} ></img></NavLink>
                    <p className=""><NavLink to="/projects">Проекты</NavLink></p>
                    <p className=""><NavLink to="/teams">Команды</NavLink></p>
                </nav>
            </div>
        </div>
        
    );
}

export default Header

import { NavLink } from "react-router";

const Header = () => {
    
    return(
        <div className="header">
            <nav className="navigation">
                <p className=""><NavLink to="/projects">Проекты</NavLink></p>
                <p className=""><NavLink to="/teams">Команды</NavLink></p>
            </nav>
        </div>
    );
}

export default Header
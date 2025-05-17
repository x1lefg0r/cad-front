import '../styles/components.css';
import {NavLink} from 'react-router';
import homelogo from '../assets/homelogo.webp';

const Header = () => {
  return (
    <header className="header">
      <div className="navigation">
        <div className="linksleft">
          <NavLink to="/" className="nav-link-image">
            <img
              src={homelogo}
              alt="Home"
              style={{maxWidth: '60px', maxHeight: '60px', marginLeft: '20px'}}
            ></img>
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Проекты
          </NavLink>
          <NavLink to="/teams" className="nav-link">
            Команды
          </NavLink>
        </div>
        <div className="linksright">
          <a
            href="https://mospolytech.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Наш университет
          </a>
          <a
            href="https://fit.mospolytech.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Наш факультет
          </a>
        <a
        href=''
        >
          <img className="burger-menu-icon" src="/src/assets/burger-menu.png" alt="" />
        </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

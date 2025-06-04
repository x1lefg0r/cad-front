import {useState} from 'react';
import {NavLink} from 'react-router';
import '../styles/components.css';
import homelogo from '../assets/homelogo.webp';
import KeepMountedModal from './BurgerModalCard';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <NavLink to="projects" className="nav-link">
            Проекты
          </NavLink>
          <NavLink to="teams" className="nav-link">
            Направления
          </NavLink>
          <NavLink to="subteams" className="nav-link">
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
            Факультет
          </a>
          <button onClick={() => toggleModal()}>
            <img
              className="burger-menu-icon"
              src="cad-front/src/assets/burger-menu.png"
              alt=""
            />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <KeepMountedModal open={!!isModalOpen} handleClose={closeModal} />
      )}
    </header>
  );
};

export default Header;

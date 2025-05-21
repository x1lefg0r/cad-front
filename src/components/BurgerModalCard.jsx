import Modal from '@mui/material/Modal';
import {NavLink} from 'react-router-dom';
import '../styles/burgerModalCard.css';

export default function KeepMountedModal({open, handleClose}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="fullscreen-menu"
      aria-describedby="fullscreen-navigation"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        onClick={handleClose}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 26,
            right: 64,
            fontSize: '2rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            fontSize: '1.5rem',
          }}
          onClick={e => e.stopPropagation()}
        >
          <NavLink
            to="/directions"
            onClick={handleClose}
            className="modal-link"
          >
            Проекты
          </NavLink>
          <NavLink to="/teams" onClick={handleClose} className="modal-link">
            Команды
          </NavLink>
          <a
            href="https://mospolytech.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            Университет
          </a>
          <a
            href="https://fit.mospolytech.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            Факультет
          </a>
        </nav>
      </div>
    </Modal>
  );
}

import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import db from '../assets/db.json';
import '../styles/ModalCard.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '1000px',
  maxHeight: '80vh',
  bgcolor: '#ffffff',
  border: '2px solid #ffd900',
  borderRadius: '8px',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

export default function KeepMountedModal({
  open,
  handleClose,
  header,
  text,
  additionalImg,
  teamleader,
  teamMembers,
  projectId,
}) {
  const project = projectId ? db.projects.find(p => p.id === projectId) : null;
  const linkedTeam = project?.linkedTeamId
    ? db.teams.find(t => t.id === project.linkedTeamId)
    : null;

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
    >
      <Box sx={modalStyle}>
        <div className="modal-content">
          <Typography id="modal-title" variant="h6" component="h2">
            <h2 className="modal-header Jura">{header}</h2>
          </Typography>
          <div className="modal-details">
            <div className="modal-description">
              {additionalImg && (
                <img
                  src={`assets/${additionalImg}`}
                  alt={header}
                  className="modal-image"
                />
              )}
              <Typography>
                <p className="modal-text Jura">{text}</p>
              </Typography>
            </div>
            {teamleader && (
              <Typography>
                <p className="modal-text Jura">{teamleader}</p>
              </Typography>
            )}
            {teamMembers && (
              <Typography>
                <p className="modal-text Jura">{teamMembers}</p>
              </Typography>
            )}
            {linkedTeam && (
              <div className="modal-section">
                <h3 className="modal-subheader Jura">Направление</h3>
                <div className="modal-list">
                  <div className="modal-list-item">
                    <Link
                      to="/cad-front/teams"
                      state={{teamId: linkedTeam.id}}
                      className="modal-list-title Jura modal-link"
                      onClick={handleClose}
                    >
                      {linkedTeam.name}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

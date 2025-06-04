import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import db from '../assets/db.json';
import '../styles/TeamModalCard.css';

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
  teamId,
}) {
  const subteams = teamId
    ? db.subteams.find(st => st.id === teamId)?.subteams || []
    : [];

  const team = teamId ? db.teams.find(t => t.id === teamId) : null;
  const projects = team?.linkedProjectId?.length
    ? db.projects.filter(p => team.linkedProjectId.includes(p.id))
    : [];

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
          {additionalImg && (
            <img
              src={`cad-front/assets/${additionalImg}`}
              alt={header}
              className="modal-image"
            />
          )}
          <div className="modal-details">
            <Typography>
              <p className="modal-text Jura">{text}</p>
            </Typography>
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
            {subteams.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-subheader Jura">Подкоманды</h3>
                <div className="modal-list">
                  {subteams.map(subteam => (
                    <div key={subteam.name} className="modal-list-item">
                      <Link
                        to="/subteams"
                        state={{subTeamId: subteam.name}}
                        className="modal-list-title Jura modal-link"
                        onClick={handleClose}
                      >
                        {subteam.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {projects.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-subheader Jura">Проекты</h3>
                <div className="modal-list">
                  {projects.map(project => (
                    <div key={project.id} className="modal-list-item">
                      <Link
                        to="/projects"
                        state={{projectId: project.id}}
                        className="modal-list-title Jura modal-link"
                        onClick={handleClose}
                      >
                        {project.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

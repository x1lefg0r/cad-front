import {useState, useEffect, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../styles/teams.css';
import db from '../assets/db.json';
import KeepMountedModal from '../components/TeamModalCard';

const TeamsPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const teamRefs = useRef({});

  useEffect(() => {
    if (location.state?.teamId) {
      const {teamId} = location.state;
      const team = db.teams.find(t => t.id === teamId);

      if (team) {
        setSelectedTeam(team);
        setTimeout(() => {
          teamRefs.current[teamId]?.scrollIntoView({block: 'center'});
        }, 200);
      }
      navigate('/cad-front/teams', {replace: true, state: null});
    }
  }, [location.state, navigate]);

  const handleOpen = team => {
    setSelectedTeam(team);
  };

  const handleClose = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="teams-container">
      <div className="teams-grid">
        {db.teams.map(team => (
          <div
            key={team.id}
            ref={el => (teamRefs.current[team.id] = el)}
            className="team-card"
            onClick={() => handleOpen(team)}
          >
            <img
              src={`assets/${team.logo}`}
              alt={team.name}
              className="team-image"
            />
            <div className="team-content">
              <h3 className="team-name Jura">{team.name}</h3>
              <p className="team-description Jura">{team.description}</p>
            </div>
            <button className="team-button" onClick={() => handleOpen(team)}>
              <span className="team-button-text">Подробнее</span>
            </button>
          </div>
        ))}
      </div>
      {selectedTeam && (
        <KeepMountedModal
          open={!!selectedTeam}
          handleClose={handleClose}
          header={selectedTeam.name}
          text={selectedTeam.description}
          teamleader={selectedTeam.teamleader}
          teamMembers={selectedTeam.members}
          additionalImg={selectedTeam.additional}
          teamId={selectedTeam.id}
        />
      )}
    </div>
  );
};

export default TeamsPage;

import {useEffect, useState, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../styles/teams.css';
import db from '../assets/db.json';
import KeepMountedModal from '../components/TeamModalCard';

const TeamsPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const TeamRefs = useRef({});
  useEffect(() => {
    if (location.state?.TeamId) {
      const {TeamId} = location.state;
      const Team = db.teams.find(p => p.id === TeamId);

      if (Team) {
        setSelectedTeam(Team);
        setTimeout(() => {
          TeamRefs.current[TeamId]?.scrollIntoView({block: 'center'});
        }, 200);
      }
      navigate('/teams', {replace: true, state: null});
    }
  }, [location.state, navigate]);

  const handleOpen = team => {
    setSelectedTeam(team);
  };

  const handleClose = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="teamsList">
      {db.teams.map(team => (
        <div
          key={team.id}
          id={team.id}
          ref={el => (TeamRefs.current[team.id] = el)}
          className="teamItem"
          onClick={() => handleOpen(team)}
        >
          <img
            src={`/assets/${team.logo}`}
            alt={team.title}
            className="teamLogo"
          />
          <div className="teamContent">
            <p className="Jura" style={{fontSize: '24px'}}>
              {team.name}
            </p>
            <p className="Jura" style={{fontSize: '20px'}}>
              {team.description}
            </p>
          </div>
        </div>
      ))}
      {selectedTeam && (
        <KeepMountedModal
          open={!!selectedTeam}
          handleClose={handleClose}
          header={selectedTeam.name}
          description={selectedTeam.Teams}
          teamleader={selectedTeam.teamleader}
          teamMembers={selectedTeam.members}
          additionalImg={selectedTeam.additional}
        />
      )}
    </div>
  );
};

export default TeamsPage;

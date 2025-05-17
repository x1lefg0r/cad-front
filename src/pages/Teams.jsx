import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../styles/teams.css';
import db from '../assets/db.json';
import KeepMountedModal from '../components/TeamModalCard';

const TeamsPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const {hash} = useLocation();
  const navigate = useNavigate();
  const {teams} = db;
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setSelectedTeam(element);
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
      navigate('/teams', {replace: true, state: null});
    }
  }, [hash]);

  const handleOpen = team => {
    setSelectedTeam(team);
  };

  const handleClose = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="teamsList">
      {teams.map(team => (
        <div
          key={team.id}
          id={team.id}
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
            {/* <p className="Jura">{team.teamleader}</p>
            <p className="Jura">{team.projects}</p>
            <p className="Jura">{team.members}</p> */}
          </div>
        </div>
      ))}
      {selectedTeam && (
        <KeepMountedModal
          open={!!selectedTeam}
          handleClose={handleClose}
          header={selectedTeam.name}
          description={selectedTeam.projects}
          teamleader={selectedTeam.teamleader}
          teamMembers={selectedTeam.members}
          additionalImg={selectedTeam.additional}
        />
      )}
    </div>
  );
};

export default TeamsPage;

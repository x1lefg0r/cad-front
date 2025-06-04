import {useEffect, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../styles/subteams.css';
import db from '../assets/db.json';

const SubTeamsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subTeamRefs = useRef({});

  useEffect(() => {
    if (location.state?.subTeamId) {
      const {subTeamId} = location.state;
      setTimeout(() => {
        subTeamRefs.current[subTeamId]?.scrollIntoView({block: 'center'});
      }, 200);
      navigate('/cad-front/subteams', {replace: true, state: null});
    }
  }, [location.state, navigate]);

  return (
    <div className="subteams-container">
      {db.subteams.map(direction => (
        <div key={direction.id} className="direction-section">
          <h2 className="direction-header">{direction.header}</h2>
          <div className="subteams-grid">
            {direction.subteams.map(subTeam => (
              <div
                key={subTeam.name}
                ref={el => (subTeamRefs.current[subTeam.name] = el)}
                className="subteam-card"
              >
                <h3 className="subteam-name">{subTeam.name}</h3>
                <p className="subteam-description">{subTeam.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubTeamsPage;

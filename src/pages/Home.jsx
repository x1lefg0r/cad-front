import bghome from '../assets/bghome.webp';
import bg2 from '../assets/bg2.webp';
import '../styles/home.css';
import img3 from '../assets/img3.png';
import ProjectsCoverflow from '../components/EffectCoverflow.jsx';
import db from '../assets/db.json';
import TeamCard from '../components/TeamCard';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const {teams} = db;
  return (
    <div className="homeContainer">
      <div className="first">
        <img
          src={bghome}
          alt=""
          style={{
            position: 'static',
            zIndex: '-1',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        />
        <div className="firsttext">
          <div className="title">
            <p>Создавай</p>
            <p>Автоматизируй</p>
            <p>Программируй</p>
            <p>Разрабатывай</p>
          </div>
          <p className="uppermain">
            Центр САПР разработки
            <br />
            Московского Политехнического Университета
          </p>
        </div>
      </div>
      <div className="second">
        <div className="box">
          <div className="text">
            <p className="aboutus">О нас</p>
            <p className="optimaaboutus Jura">
              Наш центр имеет уникальные команды, работающие над разработкой
              интересных и востребованных проектов. Основная область нашей
              деятельности - работа с CAD системами и движками,
              программирование, инженерные задачи. С нами работают известные
              Российские компании, многие из участников уже обустроены.
            </p>
          </div>
          <div className="image-aboutus-container">
            <img src={img3} alt="" className="usualimage" />
          </div>
        </div>
      </div>
      <div className="third">
        <img
          src={bg2}
          alt=""
          style={{
            position: 'static',
            zIndex: '-1',
            marginTop: '-300px',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        />
        <p
          className="Dela"
          style={{margin: '80px', position: 'absolute', marginTop: '-20px'}}
        >
          Проекты
        </p>
        <div className="projectsContainer">
          <ProjectsCoverflow data={db} />
        </div>
      </div>
      <div className="fourth">
        <p className="Dela" style={{marginBottom: '40px'}}>
          Команды
        </p>
        <div className="teamsContainer">
          {teams.map(team => (
            <TeamCard
              key={team.id}
              logo={`cad-front/assets/${team.logo}`}
              title={team.name}
              onClick={() => navigate('teams', {state: {TeamId: team.id}})}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

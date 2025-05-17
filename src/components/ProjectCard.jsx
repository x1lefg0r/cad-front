import '../styles/components.css';
import kot from '../assets/kot.webp';

const ProjectCard = ({handleClick}) => {
  return (
    <div className="projcard">
      <img src={kot} alt="" style={{width: '200px'}} />
      <div className="textproj">
        <p className="Jura">Название проекта</p>
        <p className="Jura">Описание проекта</p>
        <button onClick={handleClick}>Подробнее</button>
      </div>
    </div>
  );
};

export default ProjectCard;

import '../styles/components.css';

const TeamCard = ({logo, title, onClick}) => {
  return (
    <div className="teamCard" onClick={onClick} style={{cursor: 'pointer'}}>
      <div className="tcContainer">
        <img src={logo} alt="" className="teamlogo" />
        <p className="teamsdesc">{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;

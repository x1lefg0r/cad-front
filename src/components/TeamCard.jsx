import '../styles/components.css'
const TeamCard = (props) => {
    return (
        <div className="teamCard">
            <div className="tcContainer">
                <img src={props.logo} alt="" className='teamlogo'/>
                <p className="teamsdesc">{props.title}</p>
            </div>
        </div>
    )
}

export default TeamCard
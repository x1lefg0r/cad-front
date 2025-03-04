import '../styles/components.css'
const TeamCard = (props) => {
    return (
        <div className="teamCard">
            <div className="tcContainer">
                <img src={props.logo} alt="" style={{ 
                margin: "20px",
                width: "120px", 
                height: "120px", 
                display:"flex", 
                flexDirection: "row", 
                justifyContent: "flex-start", 
                alignItems: "center",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}/>
                <p className="Jura" style={{fontSize: "24px", margin: "20px"}}>{props.title}</p>
            </div>
        </div>
    )
}

export default TeamCard
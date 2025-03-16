import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/teams.css"
import db from '../assets/db.json'


const TeamsPage = () => {
    const location = useLocation();
    const teams = db.teams
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
            }
        }
    }, [location]);

    return (
        <div className="teamsList">
            {teams.map((team) => (
                <div key={team.id} id={team.id} className="teamItem">
                    <img src={`/assets/${team.logo}`} alt={team.title} className="teamLogo" />
                    <div className="teamContent">
                        <p className="Jura" style={{fontSize:"24px"}}>{team.name}</p>
                        <p className="Jura">{team.description}</p>
                        <p className="Jura">{team.teamleader}</p>
                        <p className="Jura">{team.projects}</p>
                        <p className="Jura">{team.members}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamsPage;

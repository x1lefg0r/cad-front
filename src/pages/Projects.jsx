import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/projects.css';
import db from '../assets/db.json';
import KeepMountedModal from "../components/ModalCard";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const projectRefs = useRef({}); 
    const teams = db.teams
    useEffect(() => {
        if (location.state?.projectId) {
            const projectId = location.state.projectId;
            const project = db.projects.find(p => p.id === projectId);

            if (project) {
                setSelectedProject(project);
                setIsOpen(true);
                setTimeout(() => {
                    projectRefs.current[projectId]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 200);
            }
            navigate("/projects", { replace: true, state: null });
        }
    }, [location.state, navigate]);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className='cnt'>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "20px", width: "100%", alignItems: "center", marginBottom: "60px" }}>
                {db.projects.map((project) => (
                    <div key={project.id} ref={el => projectRefs.current[project.id] = el} className='projcard'>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                            <img src={`/assets/${project.image}`} alt={project.name} style={{ width: "300px", height: "180px", objectFit: "cover", borderRadius: "10px", boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.5)"}} />
                            <div className='textproj'>
                                <p className='Jura'>{project.name}</p>
                                <p className='Jura'>{project.description}</p>
                            </div>
                        </div>
                        <button className="project-button" onClick={() => handleOpen(project)}>
                            <span className="project-button-text">Подробнее</span>
                        </button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <KeepMountedModal
                    open={isOpen}
                    handleClose={handleClose}
                    header={selectedProject.name}
                    text={selectedProject.more}
                    additionalImg={selectedProject.additional}
                />
            )}
        </div>
    );
};

export default Projects;

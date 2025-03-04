import '../styles/projects.css'
import kot from '../assets/kot.webp'
import { useState } from "react";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="project">
            <article className="project-items">
                <img src={kot} alt="project-photo" />
                <div className="project-details">
                    <h2>Имя проекта</h2>
                    <p>Краткое описание проекта</p>
                    <button className="button" onClick={() => setIsOpen(true)}>Раскрыть проект</button>
                </div>
            </article>

            <div className={`project-description ${isOpen ? "open" : ""}`}>
                <article className="description">
                    <h2>Имя проекта</h2>
                    <p>Полное Описание проекта</p>
                    <button className="button button-description" onClick={() => {setIsOpen(false)}}>Закрыть</button>
                </article>
            </div>
        </div>
    );
};


export default Projects;

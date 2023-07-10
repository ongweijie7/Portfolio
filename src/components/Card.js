import placeholder from "../assets/placeholder.png";

import "./card.css";

const Card = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-pic-container">
                <img className="project-pic" src={placeholder}/>
            </div>
                        
            <div className="description">
                <h1>{project.title}</h1>
                <p className="highlights"> {project.highlights}</p>
                <ul className="techstacks">
                    <li>React Native</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Firebase</li>
                    <li>Git&Github</li>
                </ul>
            </div>
        </div>

    )
}

export default Card;
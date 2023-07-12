import placeholder from "../assets/placeholder.png";

import "./card.css";

import { FaReact, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiFirebase} from "react-icons/si";
import { Proj1, Proj2 } from "../constant/MyInfo";

const Card = ({ project, index }) => {
    let Icons = null;
    if (index == 0) {
        Icons = Proj1;
    } else {
        Icons = Proj2;
    }

    return (
        <div className="project-card">
            <div className="project-img">
                <img src={project.img}/>
                <div className="overlay">

                </div>
            </div>
            
                        
            <div className="description">
                <h1>{project.title}</h1>
                <p className="highlights"> {project.highlights}</p>
                <div className="techstacks">
                    <Icons/>
                </div>
                <div >

                </div>
            </div>
        </div>

    )
}

export default Card;
import Card from "../components/Card";
import { projects } from "../constant/MyInfo";

import "./project.css";

const Project = () => {
    return (
        <section className="projects">
            <h1 className="section-name">03. My Projects</h1>
            {projects.map(project => (
                <Card project={project}/>
            ))

            }
            
        </section>
    )
}

export default Project;
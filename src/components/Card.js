import placeholder from "../assets/placeholder.png";
import { Proj1, Proj2 } from "../constant/MyInfo";

import "./card.css";

const Card = ({ project, index }) => {
    let Icons = null;
    if (index == 0) {
        Icons = Proj1;
    } else {
        Icons = Proj2;
    }

    const replaceWithLineBreaks = (inputString) => {
        const replacedString = inputString.replace(/\\n/g, '<br>');
        return { __html: replacedString };
    }



    const Image = () => {
        return (
             <div className="project-img">
                <img src={project.img}/>
                <div className="overlay"></div>
            </div>)
    }
    
    const Description = ({index}) => {
        return (<div className="description">
                    <h1>{project.title}</h1>
                    <p className="highlights" dangerouslySetInnerHTML={replaceWithLineBreaks(project.highlights)}></p>
                    <div className={`techstacks ${index%2!=0? "isOdd":""}`}>
                        <Icons/>
                    </div>
                </div>)
    }


    return (
        
        <div className="project-card">
            { index % 2 == 0 ?
            <>
                <Image/>
                <Description index={index}/>
            </> :
            <>
                <Description index={index}/>
                <Image/>
            </>
            }
            
        </div>

    )
}

export default Card;
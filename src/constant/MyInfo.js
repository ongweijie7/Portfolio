import ProHub from "../assets/ProHub.png";
import JbBlog from "../assets/JbBlog.png";

import { FaReact, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiFirebase} from "react-icons/si";



export const projects = [
    {
        title: "Pro Hub",
        img: ProHub,
        highlights: "This was a application design to boost the productivity of students and to keep students focused",
        techstacks: [FaReact, SiFirebase, RiJavascriptFill, FaCss3Alt]
    },
    {
        title: "JB Delights",
        img: JbBlog,
        highlights: "A full-stack application built using MERN which was aimed at collating various JB itineraries for potential travellers",
        techstacks: [FaReact, SiMongodb, RiJavascriptFill, FaCss3Alt]
    },
]

export const work = [
    {
        position: "Full Stack Developer Intern",
        company: "IDEMIA",
        duration: "May 2023 - Present",
        achievements: ["Played a pivotal role in implementing an electronic server designed to process requests from frontend devices, enhancing system responsiveness",
        "Employed Java Spring Boot to work with both SOAP and REST API, creating integration test cases with REST Assured",
        "Conducted comprehensive integration tests using SOAPUI and Postman, ensuring seamless system operations",
        "Regularly participated in biweekly sprint meetings, contributing to team strategy and project coordination"]
    },
    {
        position: "Full Stack Developer",
        company: "Facebook",
        duration: "May 2023 - Present",
        achievements: ["Played a pivotal role in implementing an electronic server designed to process requests from frontend devices, enhancing system responsiveness",
        "Employed Java Spring Boot to work with both SOAP and REST API, creating integration test cases with REST Assured",
        "Conducted comprehensive integration tests using SOAPUI and Postman, ensuring seamless system operations",
        "Regularly participated in biweekly sprint meetings, contributing to team strategy and project coordination"]
    },
    {
        position: "Full Stack Developer",
        company: "Google",
        duration: "May 2023 - Present",
        achievements: ["Played a pivotal role in implementing an electronic server designed to process requests from frontend devices, enhancing system responsiveness",
        "Employed Java Spring Boot to work with both SOAP and REST API, creating integration test cases with REST Assured",
        "Conducted comprehensive integration tests using SOAPUI and Postman, ensuring seamless system operations",
        "Regularly participated in biweekly sprint meetings, contributing to team strategy and project coordination"]
    },

]

export const Proj1 = () => {
    return (<><FaReact className="icon"/>
            <SiFirebase className="icon"/>
            <FaCss3Alt className="icon"/>
            <RiJavascriptFill className="icon"/></>)
}

export const Proj2 = () => {
    return (<><FaReact className="icon"/>
            <SiMongodb className="icon"/>
            <FaCss3Alt className="icon"/>
            <RiJavascriptFill className="icon"/></>)
}
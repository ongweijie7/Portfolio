import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiFirebase, SiMongodb } from "react-icons/si";

import JbBlog from "../assets/JbBlog.png";
import ProHub from "../assets/ProHub.png";

export const projects = [
    {
        title: "Pro Hub",
        img: ProHub,
        highlights: "Together with my partner, we created this full-stack application built over summer of 2021" 
        + " We noticed how many students including ourselves were victims of procrastination."
        + " \\n \\n Therefore, we design this application with the aim of using positive peer pressure"
        + " to help fellow students fight procrastination",
        techstacks: [FaReact, SiFirebase, RiJavascriptFill, FaCss3Alt]
    },
    {
        title: "JB Delights",
        img: JbBlog,
        highlights: "During one of my itenary planning to JB, I noticed how much of the information was scattered"
        + " which resulted in inefficient research"
        + " \\n \\n Hence, this full-stack application was designed to consolidate important information"
        + " such as the address, estimated cost and other common details for the ease of users",
        techstacks: [FaReact, SiMongodb, RiJavascriptFill, FaCss3Alt]
    },
]

export const work = [
    {
        position: "Full Stack Developer Intern",
        company: "IDEMIA",
        duration: "May 2023 - Present",
        achievements: ["Assisted in implementation of an eServer designed to process requests from frontend devices, enhancing system responsiveness. Project is due to be deployed at Singapore terminals.",
        "Employed the use of Java Spring Boot to work with both SOAP and REST API.",
        "Conducted comprehensive integration tests with JUnit and Hamcrest alongside SOAP UI and Postman, ensuring seamless system operations.",
        "Regularly participated in biweekly sprint meetings, contributing to team strategy and project coordination."]
    }
]

export const Proj1 = () => {
    return (<>
            <div className="icon-container"><FaReact className="icon"/> <p>React Native</p></div>
            <div className="icon-container"><SiFirebase className="icon"/> <p>Firebase</p></div>
            <div className="icon-container"><FaCss3Alt className="icon"/> <p>CSS</p></div>
            <div className="icon-container"><RiJavascriptFill className="icon"/><p>Javascript</p></div>
            </>)
}

export const Proj2 = () => {
    return (<>
            <div className="icon-container"><FaReact className="icon"/> <p>React</p></div>
            <div className="icon-container"><SiMongodb className="icon"/> <p>MongoDB</p></div>
            <div className="icon-container"><FaCss3Alt className="icon"/> <p>CSS</p></div>
            <div className="icon-container"><RiJavascriptFill className="icon"/> <p>Javascript</p></div>
            </>)
}
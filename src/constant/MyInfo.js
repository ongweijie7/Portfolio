import { FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiFirebase, SiMongodb, SiFastapi, SiGooglecloud } from "react-icons/si";

import JbBlog from "../assets/JbBlog.png";
import ProHub from "../assets/ProHub.png";
import Spuddi from "../assets/Spuddi.png";

export const projects = [
    {
        title: "Spuddi",
        img: Spuddi,
        highlights: "Spuddi leverages on multiple generative AI models, including Whisper & GPT to allow begineers"
        + " to pick up or improve their conversation skills in a new language." 
        + " \\n \\n This full-stack application was created as a prototype for Cooperathon, Canada's largest open innovation competition."
        + " We were shortlisted as finalist amongst 6 teams.",
        githubLink: "https://github.com/ongweijie7/spuddy-backend"

    },
    {
        title: "JB Delights",
        img: JbBlog,
        highlights: "While planning my itinerary for a trip to Johor Bahru, Malaysia, "
        + " I noticed how much of the information was scattered and unconsolidated which resulted in inefficient research"
        + " \\n \\n Hence, I built JB Delights, a full-stack application that consolidates popular recommendations and important information,"
        + " such as the addresses, estimated costs of eateries, for the ease of users planning a trip to JB",
        techstacks: [FaReact, SiMongodb, RiJavascriptFill, FaCss3Alt],
        githubLink: "https://github.com/ongweijie7/JBDelights"
    },
    {
        title: "Pro Hub",
        img: ProHub,
        highlights: "My partner and I created this full-stack application after noticing" 
        + " how many students, including ourselves were victims of procrastination."
        + " \\n \\n This application uses positive peer pressure"
        + " to help fellow students fight procrastination",
        techstacks: [FaReact, SiFirebase, RiJavascriptFill, FaCss3Alt],
        githubLink: "https://github.com/ongweijie7/ProHub"
    },

]

export const work = [
    {
        position: "Software Engineer Intern",
        company: "Mavennet",
        link: "https://www.mavennet.com/",
        duration: "Jan 2024 - Dec 2024",
        achievements: [
            "Worked on developing a full-stack financial platform using Nest.js & React for efficient blockchain transactions at a fast-paced & dynamic blockchain consulting start-up based in Toronto, Canada.",
            "Led a project to encrypt sensitive personal information in RDS database with AWS KMS, ensuring 100% encryption of all personal information, with appropriate decryption across various endpoints.",
            "Collaborated extensively with the product manager to scope out features based on client requirements.",
            "Created stable migration scripts for seamless data handling in production, reducing downtime & data inconsistencies.",
            "Implemented comprehensive integration & smoke tests with Postman, ensuring robust end-to-end testing.",
            "Utilized various AWS services (CloudFormation, Lambda, etc.) for efficient deployment & infrastructure management, ensuring stable deployments with Sentry, Flagsmith & API versioning.",
            "Integrated & worked with various blockchain APIs, including Balance, Fireblocks, Infura, & Quicknode."
        ]
    },
    {
        position: "Full Stack Developer Intern",
        company: "IDEMIA",
        link: "https://www.idemia.com/",
        duration: "May 2023 - Nov 2023",
        achievements: [
        "Developed a Java Spring Boot server, which was deployed at Singapore’s airport terminals assisting airport officers with smooth & secure transitions for millions of travellers annually.",
        "Built a timeout feature with a Cron scheduler to manage officer sessions within Hazelcast, an in-memory data grid, enhancing system reliability.",
        "Led the implementation of Logback for server logging, establishing a time-based rolling policy for log files, improving server robustness.",
        "Implemented interceptors to remove sensitive information from requests, ensuring compliance with data privacy standards.",
        "Refactored the codebase using OOP practices & Spring Boot annotations, simplifying software maintenance.",
        "Created extensive unit & integration tests using JUnit, Hamcrest, SOAPUI & Postman to ensure seamless system operations.",
        "Documented all endpoints using GitHub markdown, improving onboarding & knowledge sharing among developers."
        ]
    }
]

export const Proj1 = () => {
    return (<>
            <div className="icon-container"><FaReact className="icon"/> <p>React Native</p></div>
            <div className="icon-container"><FaCss3Alt className="icon"/> <p>CSS</p></div>
            <div className="icon-container"><RiJavascriptFill className="icon"/><p>Javascript</p></div>
            <div className="icon-container"><SiFastapi className="icon"/><p>FastAPI</p></div>
            <div className="icon-container"><SiGooglecloud className="icon"/><p>Google Cloud</p></div>
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

export const Proj3 = () => {
    return (<>
            <div className="icon-container"><FaReact className="icon"/> <p>React Native</p></div>
            <div className="icon-container"><SiFirebase className="icon"/> <p>Firebase</p></div>
            <div className="icon-container"><FaCss3Alt className="icon"/> <p>CSS</p></div>
            <div className="icon-container"><RiJavascriptFill className="icon"/><p>Javascript</p></div>
            </>)
}




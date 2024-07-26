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
        techstacks: [FaReact, SiFirebase, RiJavascriptFill, FaCss3Alt],
        githubLink: "https://github.com/ongweijie7/ProHub"
    },
    {
        title: "JB Delights",
        img: JbBlog,
        highlights: "During one of my itenary planning to JB, I noticed how much of the information was scattered"
        + " which resulted in inefficient research"
        + " \\n \\n Hence, this full-stack application was designed to consolidate important information"
        + " such as the address, estimated cost and other common details for the ease of users",
        techstacks: [FaReact, SiMongodb, RiJavascriptFill, FaCss3Alt],
        githubLink: "https://github.com/ongweijie7/JBDelights"
    },
]

export const work = [
    {
        position: "Software Engineer Intern",
        company: "Mavennet",
        duration: "Jan 2024 - Dec 2024",
        achievements: [
            "Work in a fast-paced & dynamic blockchain consulting start-up in Toronto, developing a full-stack financial platform using Nest.js & React for efficient blockchain currency transactions",
            "Led the encryption of sensitive personal information in RDS database with AWS KMS, ensuring 100% encryption of all personal information, with appropriate decryption across various endpoints",
            "Collaborated extensively with product manager to scope out features based on client requirements",
            "Created stable migration scripts for seamless data handling in production, reducing downtime & data inconsistencies",
            "Implemented comprehensive integration & smoke tests with Postman, ensuring robust end-to-end testing",
            "Utilized various AWS services (CloudFormation, Lambda) for efficient deployment & infrastructure management, ensuring stable deployments with Sentry, Flagsmith & API versioning",
            "Integrated & worked with blockchain APIs (Balance, Fireblocks, Infura & Quicknode etc.)"
        ]
    },
    {
        position: "Full Stack Developer Intern",
        company: "IDEMIA",
        duration: "May 2023 - Nov 2023",
        achievements: [
        "Developed a Java Spring Boot server deployed at Singapore’s airport terminals, assisting duty officers in ensuring smooth & secure transitions for millions of travelers annually",
        "Built a timeout feature using Scheduler with a cron timer to manage officer sessions in the in-memory data grid (Hazelcast), enhancing system reliability",
        "Led the implementation of Logback for server logging, establishing a time-based rolling policy for log files",
        "Implemented interceptors to remove sensitive information from requests, ensuring compliance with data privacy standards",
        "Refactored the codebase using OOP practices & Spring Boot annotations, simplifying software maintenance",
        "Created extensive unit & integration tests using JUnit, Hamcrest, SOAPUI & Postman to ensure seamless system operations",
        "Documented all endpoints using GitHub markdown, improving onboarding & knowledge sharing among developers"
        ]
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
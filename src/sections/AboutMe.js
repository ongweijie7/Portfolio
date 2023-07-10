import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

import profilePic from "../assets/me.jpeg"

import "./aboutMe.css";

const AboutMe = () => {
    const linkedinlink = "https://www.linkedin.com/in/ong-wei-jie-05b69624b/";
    const githubLink = "https://github.com/ongweijie7";
    const instagramLink = "https://www.instagram.com/wei._.jiee/";
    
    const redirectTo = (link) => {
        window.open(link, "_blank");
    
    };

    return (
        <section className="about-me">
            
            <ul className="contact-me">
                <li onClick={() => redirectTo(githubLink)}><FaGithub className="icons"/></li>
                <li onClick={() => redirectTo(linkedinlink)}><FaLinkedin className="icons"/></li>
                <li onClick={() => redirectTo(instagramLink)}><FaInstagramSquare className="icons"/></li>
            </ul>


            <div className="card">
                <h1 className="section-name">01. About Me</h1>
                <div className="introduction">
                    <p className="description">I am an aspiring developer, currently in my penultimate year of Computer Science studies at the National University of Singapore. 
                    My primary interest lies in the field of Artificial Intelligence for I
                    am particularly fascinated by how it can be harnessed to enhance our daily lives. 
                    I relish the opportunity to meet like-minded individuals and engage in discussions about the revolutionary ways in which technology can improve our lives. 
                    Beyond academics, I try to lead a balanced lifestyle with regular gym workouts and occasional running sessions for fitness. 
                    </p>
                    <img className="profile-pic" src={profilePic}/>            
                </div>
            </div>
            
        </section>
    );
}

export default AboutMe;
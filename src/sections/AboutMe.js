import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

import profilePic from "../assets/me.jpeg"

import "./aboutMe.css";

const AboutMe = () => {
    const linkedinlink = "https://www.linkedin.com/in/ong-wei-jie-05b69624b/";
    const githubLink = "https://github.com/ongweijie7";
    const instagramLink = "https://www.instagram.com/wei._.jiee/";
    

    let introduction= "I am an aspiring developer, currently in my *penultimate year of Computer Science* at NUS."
    + "My primary interest lies in the field of *artificial intelligence* for I "
    + "am intrigued by how it can be harnessed to enhance our daily lives."
    + " I relish the opportunity to meet like-minded individuals and engage in discussions about possible solutions to problems we commonly face." 
    + " Beyond academics, I try to lead a balanced lifestyle with regular gym workouts and occasional runs.\n\n"
    + "Currently, I am interning as a *full stack developer at IDEMIA* while also working on my side projects."
    + " Here are some of the technologies I have worked with *React*, *Firebase*, *ExpressJs*, *MongoDb*, *Java Spring boot*."
    const highlightWords = (text) => {
        const regex = /\*(.*?)\*/g;
        const highlightedText = text.replace(regex, '<span className="highlight">$1</span>').replace(/\n/g, '<br/>');
        
        return <p className="description" dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    introduction = highlightWords(introduction);
    console.log(introduction)
    const redirectTo = (link) => {
        window.open(link, "_blank");
    
    };

    return (
        <section className="about-me">
            
            


            <div className="card">
                <h1 className="section-name">01. About Me</h1>
                <span className="name">Hi I am <span>Wei Jie</span>,</span>
                <div className="introduction">
                     {introduction}
                     <div className="information">
                        <img className="profile-pic" src={profilePic}/>    
                        <ul className="contact-me">
                            <li onClick={() => redirectTo(githubLink)}><FaGithub className="icons"/></li>
                            <li onClick={() => redirectTo(linkedinlink)}><FaLinkedin className="icons"/></li>
                            <li onClick={() => redirectTo(instagramLink)}><FaInstagramSquare className="icons"/></li>
                        </ul>
                     </div>
                </div>
            </div>
            
        </section>
    );
}

export default AboutMe;
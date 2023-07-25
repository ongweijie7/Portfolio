import { motion } from 'framer-motion';
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

import profilePic from "../assets/me.jpeg"

import "./aboutMe.css";

const AboutMe = () => {
    const linkedinlink = "https://www.linkedin.com/in/ong-wei-jie-05b69624b/";
    const githubLink = "https://github.com/ongweijie7";
    const instagramLink = "https://www.instagram.com/wei._.jiee/";
    

    let introduction= "I am an aspiring developer, currently in my *penultimate year of Computer Science* at NUS."
    + " I am looking to specialise in the field of *artificial intelligence* for I"
    + " am intrigued by how it can be harnessed to enhance our daily lives."
    + " I enjoy meeting like-minded individuals and discussing about possible tech solutions to common problems." 
    + " In my free time, I try to lead a balanced lifestyle with regular gym workouts and occasional runs.\n\n"
    + " Here are some of the technologies I have worked with *React*, *Firebase*, *ExpressJs*, *MongoDb*, *Java Spring boot*."
    const highlightWords = (text) => {
        const regex = /\*(.*?)\*/g;
        const highlightedText = text.replace(regex, '<span className="highlight">$1</span>').replace(/\n/g, '<br/>');
        
        return <p className="description" dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    introduction = highlightWords(introduction);

    const redirectTo = (link) => {
        window.open(link, "_blank");
    };

    const fadeInVariants = {
        hidden: { opacity: 0, y: -20 }, // Starting position above the element's top
        visible: { opacity: 1, y: 0,  transition: { staggerChildren: 0.5, } },
         // Ending position at the element's original position
    };

    const item = {
        hidden: {opacity: 0},  // Starting position above the element's top
        visible: {opacity: 1},
        transition: {ease: 'easeInOut'}
    };

    return (
        <section className="about-me">
            <motion.div className="card"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants} 
            >
            <motion.h1 variants={item} className="section-name">01. About Me</motion.h1>
                <motion.div variants={item}><span className="name">Hi I am <span>Wei Jie</span>,</span></motion.div>
                    <div className="introduction">
                     <motion.div variants={item}>{introduction}</motion.div>
                        <div className="information">
                            <img className="profile-pic" src={profilePic}/>    
                            <ul className="contact-me">
                                <li onClick={() => redirectTo(githubLink)}><FaGithub className="icons"/></li>
                                <li onClick={() => redirectTo(linkedinlink)}><FaLinkedin className="icons"/></li>
                                <li onClick={() => redirectTo(instagramLink)}><FaInstagramSquare className="icons"/></li>
                            </ul>
                        </div>
                    </div>
            </motion.div>
        </section>
    );
}

export default AboutMe;
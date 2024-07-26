import { motion } from 'framer-motion';
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

import profilePic from "../assets/me.jpeg"

import "./aboutMe.css";

const AboutMe = () => {
    const linkedinlink = "https://www.linkedin.com/in/ong-wei-jie-05b69624b/";
    const githubLink = "https://github.com/ongweijie7";
    const instagramLink = "https://www.instagram.com/wei._.jiee/";
    

    let introduction= "I am Computer Science student at National University of Singapore graduating in 2025 and"
    + " I am pursuing a duo specialisation in *Software Engineering* and *Artificial Intelligence*."
    + " I really enjoy building cool solutions to solve problems I experience in my life & love meeting like-minded individuals who enjoy problem solving too!" 
    + " \n\n Here are some of the technologies I have worked extensively with *React/React-Native*, *Nestjs, *Expressjs*, *Java Spring Boot*, *AWS*, *Firebase*, *MongoDb*."
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
        visible: { opacity: 1, y: 0,  transition: { staggerChildren: 0.8, } },
         // Ending position at the element's original position
    };

    const item = {
        hidden: {opacity: 0},  // Starting position above the element's top
        visible: {opacity: 1},
        transition: {ease: 'linear'}
    };

    //ToDo fix this animation
    const fadeInVariantsIcons = {
        hidden: { opacity: 0, y: -20 }, // Starting position above the element's top
        visible: { opacity: 1, y: 0,  transition: { staggerChildren: 0.8, delay: 3 } },
         // Ending position at the element's original position
    };

    const dropDownItem = {
        hidden: { opacity: 0, y: -20 }, // Starting position above the element's top
        visible: { opacity: 1, y: 0},
        transition: {ease: 'linear'}
    }

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
                            <motion.img variants={item} className="profile-pic" src={profilePic}/>    
                            <motion.ul className="contact-me"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariantsIcons} >
                                <motion.li variants={dropDownItem} onClick={() => redirectTo(githubLink)}><FaGithub className="icons"/></motion.li>
                                <motion.li variants={dropDownItem} onClick={() => redirectTo(linkedinlink)}><FaLinkedin className="icons"/></motion.li>
                                <motion.li variants={dropDownItem} onClick={() => redirectTo(instagramLink)}><FaInstagramSquare className="icons"/></motion.li>
                            </motion.ul>
                        </div>
                    </div>
            </motion.div>
        </section>
    );
}

export default AboutMe;
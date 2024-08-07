import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import WJ from "./assets/wj-icon.png";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import LoadingAnimation from "./sections/LoadingAnimation";
import Project from "./sections/Project";
import Work from "./sections/Work";

import "./app.css";

function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const contactMeRef = useRef(null);

  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [project, setProject] = useState(false);
  const [contactMe, setContactMe] = useState(false);

  const scrollToAbout = () => {
    console.log(aboutRef);
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  const scrollToWork = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  const scrollToProject = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  const scrollToContactMe = () => {
    window.scrollTo({
      top: contactMeRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  /*For toggling the navbar */
  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(true);

  const showNav = () => {
      setNavbar(!navbar);
  }
  
  useEffect(() => {
    const timeout = setTimeout(() => {
        setLoading(false)
    }, 3000);

    return () => clearTimeout(timeout);
  }, [])

  useEffect(() => {
    if (about) {
      scrollToAbout();
      setAbout(false);
    } else if (work) {
      scrollToWork();
      setWork(false);
    } else if (project) {
      scrollToProject();
      setProject(false);
    } else if (contactMe) {
      scrollToContactMe();
      setContactMe(false);
    }
  }, [about, work, project, contactMe]);

  /*For framer animation */
  const fadeInVariants = {
    hidden: { opacity: 0, y: -20 }, // Starting position above the element's top
    visible: { opacity: 1, y: 0,  transition: { delay : 0.3, } },
     // Ending position at the element's original position
  };

  const reload = () => {
    window.location.reload();
  }

  return (
    <>
    {loading 
    ? <LoadingAnimation/>
    : <div className="App">
        <div className={`page-container ${navbar ? 'transformed' : ''}`}>
          <div className="nav-container" >
            <motion.img className="wj-icon" variants={fadeInVariants} initial="hidden" animate="visible"  src={WJ} onClick={() => reload()}/>
            <motion.div initial="hidden" animate="visible" variants={fadeInVariants} onClick={showNav}>
                {!navbar ? <FaBars className="nav-icon"/> : <ImCross className="nav-icon"/>}
            </motion.div>
          </div>
          
          <div className="content">
            <div ref={aboutRef}>
              <AboutMe/>
            </div>
            <div ref={workRef}>
              <Work/>
            </div>
            <div ref={projectRef}>
              <Project/>
            </div>
            <div ref={contactMeRef}>
              <ContactMe/>
            </div>
          </div>
          
        </div>
    
        <Navbar
          showNavbar={navbar}
          onClickAbout={() => setAbout(true)}
          onClickProject={() => setProject(true)}
          onClickWork={() => setWork(true)}
          onClickContactMe={() => setContactMe(true)}/>
      </div>
    }
    </>
  );
}




export default App;

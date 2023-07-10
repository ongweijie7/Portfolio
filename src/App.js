import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

import WJ from "./assets/wj-icon.png";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Project from "./sections/Project";
import Work from "./sections/Work";

import "./app.css";

function App() {
  /* for controlling the onScroll function */
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);

  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [project, setProject] = useState(false);

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

  /*For toggling the navbar */
  const [navbar, setNavbar] = useState(false);
    const showNav = () => {
        setNavbar(!navbar);
    }

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
    }
  }, [about, work, project]);

  return (
    <div className="App">
      <div className={`page-container ${navbar ? 'transformed' : ''}`}>
        <div className="nav-container" >
          <img src={WJ}/>
          <div onClick={showNav}>
              <FaBars className="nav-icon"/>
          </div>
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
        </div>
        
      </div>
      {navbar &&
        <Navbar 
        onClickAbout={() => setAbout(true)}
        onClickProject={() => setProject(true)}
        onClickWork={() => setWork(true)}/>}
    </div>
  );
}




export default App;

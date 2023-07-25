import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from "react";
import { work } from '../constant/MyInfo'; 

import IDEMIA from "../assets/IDEMIA.png";

import "./work.css";

const Work = () => {
    const [selected, setSelected] = useState(0);
    const [img, setImg] = useState(null);

    const redirectToIdemia = () => {
        window.open("https://www.idemia.com/", "_blank");
    }

    const handleTabClick = (index, img) => {
        setSelected(index);
        setImg(img);
    };

    return (
        <section className="work">
            
            <h1 className="section-name">02. Work Experience</h1>
            <div className="work-card">
                <div className="buttons">
                    <div 
                    className={`button ${selected === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1, IDEMIA)}><p>IDEMIA</p></div>
                </div>

                <div className="job-intro">
                    {selected === 1 && <img src={IDEMIA} alt=""/>}
                    {/* {selected == 2 && <img src={IDEMIA} alt=""/>} */}
                    {selected === 0 && <p>Click to find out more</p>}
                    {work.map((work, index) => {
                        return(<>
                            {selected === index+1 && 
                            <div className="details">
                            <p className="title">{work.position} <span onClick={redirectToIdemia} className="emphasis">@{work.company}</span></p>
                            <p>{work.duration}</p>
                            <ul>
                                {work.achievements.map((elements) => {
                                    return <li>{elements}</li>
                                })}
                            </ul>
                            </div>}
                            </>)
                    })}
                    
                    
                </div>
            </div>
            
        </section>
    )
}


export default Work;
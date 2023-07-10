import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from "react";
import { work } from '../constant/MyInfo'; 

import IDEMIA from "../assets/IDEMIA.png";

import "./work.css";

const Work = () => {
    const [selected, setSelected] = useState(0);
    const [img, setImg] = useState(null);
    const handleTabClick = (index, img) => {
        setSelected(index);
        setImg(img);
    };

    const things = ["Read Code", "See code", "Go toilet", "Talk to code", "Work from home"];

    return (
        <section className="work">
            {selected == 1 && <img src={IDEMIA} alt=""/>}
            {/* {selected == 2 && <img src={IDEMIA} alt=""/>} */}
            <h1 className="section-name">02. Work Experience</h1>
            <div className="work-card">
                <div className="buttons">
                    <div 
                    className={`button ${selected === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1, IDEMIA)}>IDEMIA</div>
                    <div 
                    className={`button ${selected === 2 ? 'active' : ''}`}
                    onClick={() => handleTabClick(2, null)}>FACEBOOK</div>
                    <div 
                    className={`button ${selected === 3? 'active' : ''}`}
                    onClick={() => handleTabClick(3, null)}>Google</div>
                </div>
                <div className="job-intro">
                    {selected == 0 && <p>Click to find out more</p>}
                    {work.map((work, index) => {
                        return(<>
                        {selected == index+1 && <>
                        <p className="title">{work.position} <span className="emphasis">@{work.company}</span></p>
                        <p>{work.duration}</p>
                        <ul>
                            {work.achievements.map((elements) => {
                                return <li>{elements}</li>
                            })}
                        </ul>
                        </>}
                        </>)
                    })

                    }
                    
                    
                </div>
            </div>
            
        </section>
    )
}


export default Work;
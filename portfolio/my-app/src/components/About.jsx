import React from "react";
import { Link } from "react-router-dom";
import './About.css';

export default function About(){
    return(
    <div className="right">
        <p className="about">About Me</p>
        <div className="intro1">My name is Shyali Narayan. I'm a 2025 graduate from Galgotias College at Greater Noida with a degree in Computer Science. I'm most passionate about programming and giving back to the community, and my goal is to pursue this passion within the field of software engineering. I do projects on MERN stack and I do problem solving on regular basis on leetcode.</div>
        <div className="buttdiv"><button className="butt" type="button" ><Link to=""><p>Resume</p></Link></button></div>
    </div>
    )
}
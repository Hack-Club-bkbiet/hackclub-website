import React from 'react';
import "./About.css";
import image from "../assests/images/socialLinks.png";

function About() {
    return (
        <div id = "about" className = "about">
            <div>
            <h1 className = "about__heading">What is Hack Club?</h1>
            <p className = "about__para">Hack Club is a non-profit global network of young makers and student-led programming
            clubs where young people create projects and thrive to think big and make an impact
            with technology around the world.</p>

            <h1 className = "about__heading">We at Hack Club BKBIET</h1>
            <p className = "about__para">Hack Club BKBIET is a community where students from different branches and 
            domains can come together and tinker with various new and upcoming techs. We 
            aim to spread technical awareness among students who are new to this field and 
            are confused about where to start.</p>
            </div>
            <div>
                <img className = "about__image" src = {image}></img>
            </div>
        </div>
    )
}

export default About;

import React from 'react';
import "./Note.css"
import BackgroundClip from "../assests/video/backgroundClip.mp4";

function Note() {
    return (
        <div className = "note">
           <video className = "note__video" autoPlay loop muted>
               <source src = {BackgroundClip} type = "video/mp4" />
           </video> 
           <div className = "gradient">
               <h1 className = "note__h1">Full Website is Under Development!</h1>
               <p className = "note__p">We are currently developing the full website. If you want to add some spark to it then</p>
               <a className = "note__link" href = "mailto:hackclub@bkbiet.ac.in">Let us know --{">"} </a>
           </div>
        </div>
    )
}

export default Note

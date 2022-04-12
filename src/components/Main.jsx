import React from 'react';
import Particles from 'react-tsparticles';
import Navbar from "./Navbar";
import "./Main.css";

function Main() {

  const particleOptions = {
    background: {
      color: {
        value: "#ffff",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
      },
      links: {
        color: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      // collisions: {
      //   enable: true,
      // },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  }
    
    return (
        <div className = "main">
          <Particles id = "tsparticles" options = {particleOptions} width = "100vw"/>
          <div className = "main__text">
            
            <h1>Welcome to</h1>
            <div class="title">
              <h1>Hack Club BKBIET</h1>
            </div>
            <p><b> By the students, for the students </b></p>
              <p className = "main__desc"> Hack Club’s philosophy is learning by doing. Learning to code is like gaining a superpower -- turning you from a consumer of technology into a creator. 
               It shouldn’t be taught like a class – it should be creative, inclusive space. To faster this environment, every HACK CLUB is student led and members make self-directed projects.
               </p>
          </div>
          
          
        </div>
    )
}

export default Main

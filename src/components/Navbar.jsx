import React from 'react';
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import logo from "../assests/images/logo.png";
import "./Navbar.css";

function Navbar() {
    const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#join">Join</a>
          <a href = "#footer">Contact us</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="nav__menu-bars">
        <img src = "https://cdn-icons-png.flaticon.com/512/1828/1828551.png" />
      </button>
    </header>
  );
}

export default Navbar;

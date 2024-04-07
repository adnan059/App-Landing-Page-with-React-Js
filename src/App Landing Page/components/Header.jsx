import React, { useEffect, useState } from "react";
import "../assets/css/Header.css";

const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    console.log("setting active false");
    window.onscroll = () => setActive(false);
  }, []);
  return (
    <header>
      <a href="#logo" className="logo">
        FitPro
      </a>

      <div
        onClick={() => setActive(!active)}
        id="menu-bar"
        className={`fas ${active ? "fa-times" : "fa-bars"}`}
      ></div>

      <nav className={`${active ? "navbar active" : "navbar"}`}>
        <a href="#home">home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#usage">Usage</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

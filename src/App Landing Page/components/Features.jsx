import React from "react";
import "../assets/css/Features.css";
import { featuresData } from "../assets/data/data";

const Features = () => {
  return (
    <>
      <section id="features" className="features">
        <h1 className="heading">app features</h1>
        <div className="box-container">
          {featuresData.map((ft) => (
            <div className="box" key={Math.random()}>
              <i className={ft.icon}></i>
              <h3>{ft.title}</h3>
              <p>{ft.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;

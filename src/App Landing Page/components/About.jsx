import React from "react";
import "../assets/css/About.css";
import aboutpic from "../assets/images/about.png";
import applestore from "../assets/images/apple.png";
import googlestore from "../assets/images/google.png";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">about the app</h1>

        <div className="row">
          <div className="image">
            <img src={aboutpic} alt="" />
          </div>

          <div className="content">
            <h3>Take a look around our app</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              veniam voluptate perferendis ipsa, excepturi nulla porro corrupti,
              facere omnis modi dolorem praesentium facilis, nisi aut asperiores
              harum ratione dolor nihil.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              magnam laboriosam veritatis iste sequi suscipit veniam ipsum
              reprehenderit nulla voluptatem?
            </p>
            <div className="buttons">
              <a href="#">
                <img src={applestore} alt="" />
              </a>
              <a href="#">
                <img src={googlestore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

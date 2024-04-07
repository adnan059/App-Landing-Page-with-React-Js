import React from "react";
import "../assets/css/Usage.css";
import { usageData } from "../assets/data/data";

import usage from "../assets/images/usage.png";

const Usage = () => {
  return (
    <>
      <section className="usage" id="usage">
        <h1 className="heading">How It Works</h1>
        <div className="row">
          <div className="box-container">
            {usageData.map((usg) => {
              if (usg.id < 3) {
                return (
                  <div className="box" key={usg.id}>
                    <i className={usg.icon}></i>
                    <h3>{usg.title}</h3>
                    <p>{usg.desc}</p>
                  </div>
                );
              } else {
                return;
              }
            })}
          </div>

          <img src={usage} className="divider" alt="" />

          <div className="box-container">
            {usageData.map((usg) => {
              if (usg.id > 2) {
                return (
                  <div className="box" key={usg.id}>
                    <i className={usg.icon}></i>
                    <h3>{usg.title}</h3>
                    <p>{usg.desc}</p>
                  </div>
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Usage;

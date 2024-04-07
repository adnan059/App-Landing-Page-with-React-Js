import React from "react";
import "../assets/css/Pricing.css";
import { pricingData } from "../assets/data/data.js";

const Pricing = () => {
  return (
    <>
      <section className="pricing" id="pricing">
        <h1 className="heading">Our Pricing Plans</h1>

        <div className="box-container">
          {pricingData.map((pckg) => {
            return (
              <div className="box" key={Math.random()}>
                <div className="price">
                  <span>$</span>
                  {pckg.price}
                  <span>/month</span>
                </div>
                <h3>{pckg.title}</h3>
                <ul>
                  {pckg.features.map((ft) => (
                    <li key={Math.random()}>{ft}</li>
                  ))}
                </ul>
                <a href="#" className="btn">
                  Select Plan
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Pricing;

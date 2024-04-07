import React from "react";
import "../assets/css/Review.css";
import { reviewData } from "../assets/data/data";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">Customer Review</h1>
        <div className="box-container">
          {reviewData.map((rvw) => (
            <div className="box" key={Math.random()}>
              <img src={rvw.pic} alt="" />
              <h3>{rvw.name}</h3>
              <p>{rvw.desc}</p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;

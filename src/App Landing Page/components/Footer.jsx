import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer" id="footer">
        <div className="share">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin"></a>
        </div>
        <h1 className="credit">
          created by <span>Md Adnan Faruk</span> | all rights reserved
        </h1>
      </section>
    </>
  );
};

export default Footer;

import React from "react";
import "./assets/css/ALP.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Usage from "./components/Usage";

const ALP = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <About />
      <Usage />
      <Review />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default ALP;

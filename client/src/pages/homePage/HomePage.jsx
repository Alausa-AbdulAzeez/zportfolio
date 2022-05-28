import React from "react";
import About from "../about/About";
import Home from "../home/Home";
import Resume from "../resume/Resume";
import "./homePage.css";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Resume />
    </div>
  );
};

export default HomePage;

import React from "react";
import "./about.css";
import CircleIcon from "@mui/icons-material/Circle";

const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutTitle">About me</div>
      <div className="aboutMainWrapper">
        <p className="aboutText">
          An avid and goal-driven full stack web developer with the savvy of
          building functional fullstack web applications.
        </p>
        <ul className="highlights">
          <li className="highlight">Here are some highlights;</li>
          <li className="highlight">
            <CircleIcon fontSize="xx-small" className="icons" />
            <p>Full stack web development</p>
          </li>
          <li className="highlight">
            <CircleIcon fontSize="xx-small" className="icons" />
            <p>Interactive frontend as required</p>
          </li>
          <li className="highlight">
            <CircleIcon fontSize="xx-small" className="icons" />
            <p>React</p>
          </li>
          <li className="highlight">
            <CircleIcon fontSize="xx-small" className="icons" />
            <p>Building REST API</p>
          </li>
          <li className="highlight">
            <CircleIcon fontSize="xx-small" className="icons" />
            <p>Database management</p>
          </li>
          <li className="highlight">
            <CircleIcon fontSize="xx-small" className="icons" />
            <p>Redux and context-Api for state management</p>
          </li>
        </ul>

        <div className="aboutBtns">
          <div className="contact">Contact me</div>
          <a
            href={require("../../Resume.pdf")}
            download={"Alausa-AbdulAzeez-resume"}
          >
            <div className="resume">Get resume</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

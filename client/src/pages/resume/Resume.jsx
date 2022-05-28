import React, { useRef, useState } from "react";
import "./resume.css";
import {
  Circle,
  Computer,
  Handyman,
  Palette,
  School,
} from "@mui/icons-material";
import { categories } from "../../data";

const Resume = () => {
  const titleRef = useRef();
  const [section, setSection] = useState("Projects");
  const [active, setActive] = useState({
    Education: "false",
    ProgrammingSkills: "false",
    Projects: "actives",
    Interests: "false",
  });

  // const [category, setCategory] =

  const handleClick = (e) => {
    // setSection(titleRef.current.children[1].innerText);

    if (e.target.innerText === "Programming skills") {
      setSection("ProgrammingSkills");
      setActive({
        Education: "false",
        ProgrammingSkills: "actives",
        Projects: "false",
        Interests: "false",
        // [e.target.innerText]: "",
      });
    } else {
      setSection(e.target.innerText);
      setActive({
        Education: "false",
        ProgrammingSkills: "false",
        Projects: "false",
        Interests: "false",
        [e.target.innerText]: "actives",
      });
    }
  };

  return (
    <div className="resumeContainer" id="resume">
      <div className="resumeTitle">Resume</div>
      <div className="resumeContentContainer">
        <div className="resumeContentContainerLeft">
          <div className="leftNav"></div>
          <div
            className={`leftNavItemEdu leftNavItem ${active.Education}`}
            ref={titleRef}
            onClick={handleClick}
          >
            <School className="icon" />
            <p>Education</p>
          </div>
          <div
            className={`leftNavItemProg ${active.ProgrammingSkills}`}
            ref={titleRef}
            onClick={handleClick}
          >
            <Computer className="icon" />
            <p>Programming skills</p>
          </div>
          <div
            className={`leftNavItemProj leftNavItem ${active.Projects}`}
            ref={titleRef}
            onClick={handleClick}
          >
            <Handyman className="icon" />
            <p>Projects</p>
          </div>
          <div
            className={`leftNavItemInt leftNavItem ${active.Interests}`}
            ref={titleRef}
            onClick={handleClick}
          >
            <Palette className="icon" />
            <p>Interests</p>
          </div>
          <div className="rightNav"></div>
        </div>
        <div className="resumeContainerRight">
          <div className="resumeContentContainerRight">
            {categories[section].map((category) => {
              return (
                <div className="item" key={category.title}>
                  <div className="itemContent">
                    <div className="itemHeader">
                      <Circle className="circle" />
                      <span>{category.title}</span>
                    </div>
                    <p className="itemText">{category.text}</p>
                  </div>
                  {category.timeFrame && (
                    <div className="itemTimeframe">{category.timeFrame}</div>
                  )}
                  {category.url && (
                    <a
                      href={category.url}
                      className="projLink"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <div className="itemTimeframe">View site</div>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

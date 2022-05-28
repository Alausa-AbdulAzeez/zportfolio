import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./home.css";

const Home = () => {
  const navRef = useRef();
  const [loc, setLoc] = useState();

  useEffect(() => {
    if (window.scrollY < 350) {
      setLoc("Home");
    }

    if (window.scrollY > 350 && window.scrollY < 780) {
      setLoc("About");
    }
    if (window.scrollY >= 780 && window.scrollY < 1300) {
      setLoc("Resume");
    }
    if (window.scrollY >= 1300) {
      setLoc("Contact");
    }
  }, [loc]);

  const handleScroll = (e) => {
    const navLinks = document.querySelectorAll(".link");
    navLinks.forEach((navLink) => {
      if (navLink.innerText === loc) {
        removeActive();
        navLink.classList.add("active");
      }
    });

    if (window.scrollY >= 30) {
      if (navRef.current) {
        navRef.current.style.position = "fixed";
        navRef.current.style.top = 0;
      }
    }
    if (window.scrollY < 30) {
      if (navRef.current) {
        navRef.current.style.position = "fixed";
        navRef.current.style.top = "30px";
      }
    }
    if (window.scrollY < 350) {
      setLoc("Home");
    }

    if (window.scrollY > 350 && window.scrollY < 780) {
      setLoc("About");
    }
    if (window.scrollY >= 780 && window.scrollY < 1300) {
      setLoc("Resume");
    }
    if (window.scrollY >= 1300) {
      setLoc("Contact");
    }
  };
  window.addEventListener("scroll", handleScroll);

  const removeActive = () => {
    const activeList = document.querySelectorAll(".active");
    activeList.forEach((item) => item.classList.remove("active"));
  };

  const addActive = (e) => {
    e.target.classList.add("active");
  };

  const handleSetActive = (e) => {
    removeActive();
    addActive(e);
  };

  return (
    <div className="homeContainer" id="home">
      <div className="homeMainContainer">
        <div className="navContainer" ref={navRef}>
          <div className="navHeader">
            <h3>ABDULAZEEZ</h3>
          </div>
          <div className="navLinks">
            <ul>
              <li
                onClick={handleSetActive}
                className={`link`}
                active={(loc === "Home").toString()}
              >
                <HashLink smooth to="/#home" className="navLink">
                  Home
                </HashLink>
              </li>
              <li
                onClick={handleSetActive}
                className="link"
                active={(loc === "About").toString()}
              >
                <HashLink smooth to="/#about" className="navLink">
                  About
                </HashLink>
              </li>
              <li
                onClick={handleSetActive}
                className="link"
                active={(loc === "Resume").toString()}
              >
                <HashLink smooth to="/#resume" className="navLink">
                  Resume
                </HashLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="homeContentContainer">
          <div className="homeContentContainerLeft">
            <h1 className="homeContentContainerIntro">
              Hey there! I'm <span className="nameSpan">AbdulAzeez</span>{" "}
            </h1>
            <h3 className="homeContentContainerTitle">Software developer</h3>
            <p className="homeContentContainerDesc">
              A software developer with a knack of building responsive
              applications with front and backend operations
            </p>
            <div className="homeContentContainerButtons">
              <a
                href={require("../../Resume.pdf")}
                download={"Alausa-AbdulAzeez-resume"}
              >
                <div className="resume">Get resume</div>
              </a>
            </div>
          </div>
          <div className="homeContentContainerRight">
            <div className="img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

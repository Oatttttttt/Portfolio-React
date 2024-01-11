import React from "react";
import "./css/Intro.css";
import Programmer from "../../assets/Programmer.jpg";
function Intro() {
  return (
    <>
      <div className="Intro-box" id="portfolio">
        <p>
          {" "}
          <h1>Hi, I'm Oat</h1>I am highly interested in the Full-stack developer
          role, and I have extensive experience using React and NodeJS. Please
          feel free to reach out if you would like to learn more about my
          qualifications and experience! <br />
          <a href="mailto:akarisiwong@gmail.com" className="contactBtn">
            Contact Me
          </a>
        </p>
        <img src={Programmer} alt="Programmer" />
        <div className="topBlur" />
        <div className="bottomBlur" />
      </div>
    </>
  );
}

export default Intro;

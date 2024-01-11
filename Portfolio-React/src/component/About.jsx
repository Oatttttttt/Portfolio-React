import React from "react";
import "./css/About.css";
import AboutLogo from "../../assets/About-Logo.jpg";
function About() {
  return (
    <>
      <div id="about" className="About-box">
        <img src={AboutLogo} alt="AboutLogo" />
        <p>
          {" "}
          <h1>About</h1>My name is Phumtham Akkarasiriwong. I am currently in my
          senior year, pursuing a degree in Database and Intelligent Systems as
          part of the International ICT program at Mahidol University within the
          Faculty of Information and Communication Technology.
          <hr />I possess a background in database management, along with in
          both front-end and back-end development. My passion for technology and
          problem-solving drives me to creating user-friendly interfaces and
          robust backend systems.{" "}
        </p>
        <div className="tBlur" />
        <div className="bBlur" />
      </div>
    </>
  );
}

export default About;

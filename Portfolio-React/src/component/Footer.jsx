import React from "react";
import "./css/Footer.css";
import email from "../../assets/emailIcon.png";
import linkedin from "../../assets/linkedinIcon.png";

export const Footer = () => {
  return (
    <footer id="contact" className="container">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="links">
        <li className="link">
          <img src={email} alt="Email icon" />
          <a href="mailto:akarisiwong@gmail.com">Email.com</a>
        </li>
        <li className="link">
          <img src={linkedin} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/phumtham-akkarasiriwong-054101227">
            linkedin.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

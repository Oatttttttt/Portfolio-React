import React from "react";
import "./css/Navbar.css";
import { FaReact } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="Title">
      <a href="#portfolio" className="Port">
        {" "}
        <FaReact /> Portfolio
      </a>
      <div className="list">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./css/Experience.css";
import Amarin from "../../assets/Amarin.jpg";
import { FaLaptopCode } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp } from "react-icons/fa6";
import { BsFiletypeHtml } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience">
      <div className="exper-box">
        <h1>Experience</h1>
        <h3>
          <LuSchool />
          &nbsp; Internship as a Full-Stack Website Developer at Amarin
          Corporations Public Company Limited
        </h3>
        <FaLaptopCode />
        <b>
          &nbsp; Created a dashboard website, designed, and optimized the
          databases &nbsp;
        </b>
        <FaLaptopCode />
        <p>
          (Amarin Corporations Public Company Limited, AMARIN company is an Omni
          - media firm with its businesses covering On Print, Online, On Air, On
          Ground, and On Shop platforms.)
        </p>
        <img src={Amarin} alt="Amarin" />
        <div className="icon" style={{ fontSize: "30px" }}>
          <BsFiletypeHtml />
          <BsFiletypeCss />
          <FaBootstrap />
          <DiJavascript1 />
          <FaPhp />
        </div>

        <div className="et-Blur" />
        <div className="eb-Blur" />
      </div>
    </section>
  );
}

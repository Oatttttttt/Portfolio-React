import React from "react";
import "./css/Project.css";
import Predict from "../../assets/Stocks_Predict.jpg";
import Stocks2 from "../../assets/Stocks2.jpg";
import { RiStockFill } from "react-icons/ri";

function Project() {
  return (
    <section id="project">
      <div className="Project-box">
        <img src={Predict} alt="Predict-stocks" />
        <p>
          {" "}
          <h1>Project</h1>
          <RiStockFill /> &nbsp; Predict stock in SET50 prices by analyzing
          historical data that includes news, fundamental metrics, and technical
          indicators
          <br />
          (React+ NodeJs+ MySQL+ Deep learning)
          <hr width="70%" style={{ margin: "0 auto" }} />
          Develop innovative features and utilize this project idea as a
          competitive entry for the 'Datathon' event hosted by the Securities
          and Exchange Commission (SEC) of Thailand, securing an Honorable
          Mention Award{" "}
        </p>
      </div>
      <div className="P-tBlur" />
      <div className="P-bBlur" />
      <div className="Project2-box">
        <p>
          {" "}
          <h1>Project</h1>
          <RiStockFill /> &nbsp; Develop a website to display some data for
          SETHD in the stock market, utilizing a combination of React, Flask
          (Python), and MySQL technologies.
          <br />
          (React+ Flask+ MySQL)
        </p>
        <img src={Stocks2} alt="Stocks2" />
      </div>
      <div className="P2-tBlur" />
      <div className="P2-bBlur" />
    </section>
  );
}

export default Project;

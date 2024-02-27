import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import skills from "../data/skillData.js";
import experiences from "../data/experienceData.js";
import education from "../data/educationData.js";
import "../styles/about.css";
import myImg from "../images/avatr.svg";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">about me</h1>
            <p>
              I am a computer science student currently enrolled in Monash
              University entering my final year of study. I have done many units
              and gained skills that are crucial in the field of computer
              programming such as object oriented and functional programming,
              agile development, algorithms and data structures, etc. Click on
              each tab below to reveal more information about me.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experiences" ? "active-link" : ""
                }`}
                onClick={() => opentab("experiences")}
              >
                Experiences
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>
                    <span>{skill.skill}</span>
                    <br />
                    {skill.description}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "experiences" ? "active-tab" : ""
              }`}
              id="experiences"
            >
              <ul>
                {experiences.map((experience, index) => (
                  <li key={index}>
                    <span>{experience.date}</span>
                    <br />
                    {experience.position} {experience.place}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                {education.map((school, index) => (
                  <li key={index}>
                    <span>{school.date}</span>
                    <br />
                    {school.degree} {school.place}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

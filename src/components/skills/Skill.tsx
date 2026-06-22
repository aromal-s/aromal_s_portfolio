import React from "react";
import "./Skill.css";
import develop from "../assets/webdevelop.png";
import dash from "../assets/dashboard.png";
function Skill() {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <br />
      <span className="skillDesc">
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, JavaScript, TypeScript, Python, React, Nodejs, Expressjs,
        MongoDB and Grafana.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={develop} alt="skill1" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Designing and Web Development</h2>
            <br />
            <p>
              Creating responsive, static, and dynamic websites with modern
              technologies, focusing on user-friendly interfaces, clean designs,
              and efficient functionality to deliver seamless web experiences
              across all devices.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={dash} alt="skill2" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Data Visualization</h2>
            <br />
            <p>
              Designing and developing interactive dashboards using Grafana to
              visualize data, track KPIs, and transform complex information into
              meaningful insights for better decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;

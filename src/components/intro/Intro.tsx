import React from "react";
import bg from "../assets/bgimage.jpeg";
import hire from "../assets/hireme.png";
import "./Intro.css";
import { Link } from "react-scroll";
function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I am <span className="introname">Aromal S</span>
          <br />
          Software Developer
        </span>
        <span className="intropara">
          I am a skilled software developer with experience in creating <br />
          visually appealing and user friendly websites.
        </span>
        <a
          href="mailto:aromals0479@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={hire} alt="hire" />
            Hire Me
          </button>
        </a>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;

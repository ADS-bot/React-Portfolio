import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import Me from "../../assets/me-about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>20+ worldwide</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>
          </div>
          <p>
            Hola! I am Arghadeep Saha. I am a passionate software
            developer known for My exceptional coding skills and problem-solving
            abilities. With a background in Computer Science in my Bachelor's
            from KIIT University. I spent the past 2 Years immersed in the
            world of software development.{" "}
            <strong className="want__to">wanna Know More?</strong>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

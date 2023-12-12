import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Freelance Services</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deveoping Single Page Fully Responsive Webapp</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating REST API in Node.js</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing Highly Scalable MERN Stack Applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Unit Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploying Webapp's to Server / Cloud</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fixing Bug's</p>
            </li>
          </ul>
        </article>
        {/* End of web development  */}
        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Converting Ui Mock Up's Into Native Android Applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Highly Optimised Production Ready Android Applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>unit Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploying App's To Playstore</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Finding and Fixing the bugs</p>
            </li>
          </ul>
        </article>
        {/* End of Android Development */}
      </div>
    </section>
  );
};

export default Services;

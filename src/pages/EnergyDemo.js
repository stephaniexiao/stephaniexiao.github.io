import React from "react";
import { Link } from 'react-router-dom';
import "./EnergyDemo.css";

//tab imports
import TopBarElement from "../components/TopBarElement";
import ResumeNavElement from "../components/ResumeNavElement"
import Resume from "../assets/resume.pdf";

import energy2 from "../assets/energy1.png";
import energy1 from "../assets/energy2.png";

export default class EnergyDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="topbar">
          <Link to="/work" className="no-underline">
            <h1 className="initials">SX</h1>
          </Link>
          <div className="tabs">
            <TopBarElement title="About" link="/about" />
            <TopBarElement title="Work" link="/#work" />
            <TopBarElement title="Contact" link="/contact" />
            <ResumeNavElement title="Resume" link={Resume} />
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-headercontainer">
            <h1 className="detail-header">
              Introduction to Energy Visualization
            </h1>
            <h2 className="detail-subheader">Web Development, Education</h2>
          </div>
          <div className="detail-text">
            <p className="text">
              When I first started learning Javascript and the fundamentals of
              web development, I decided to create a project using the{" "}
              <a className="textlink" href="https://p5js.org/libraries/">
                Javascript p5 Library
              </a>{" "}
              that could serve as an educational tool for students who are
              learning physics. I created the Introduction to Energy
              Visualization to help teach an important concept in an exciting
              manner.
              <br />
              <br />
              Students can click and drag any part of the red ball to resize it,
              altering the ball's mass. Additionally, they can change the slope
              of the ramp by adjusting the height of the hill. By creating an
              interactive experience, students are able to gain a stronger grasp
              on a fundamental concept in physics.
            </p>
          </div>
          <img
            src={energy1}
            width="500px"
            alt="energydemo-initial"
            style={{ marginBottom: "2%" }}
          ></img>
          <img
            src={energy2}
            width="500px"
            alt="energydemo-in-motion"
            style={{ marginBottom: "2%" }}
          ></img>
        </div>
      </div>
    );
  }
}

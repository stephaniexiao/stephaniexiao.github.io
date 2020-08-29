import React from "react";
// import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import "./Work.css";
import landingart from "../assets/landingart.png";
import downarrow from "../assets/downarrow.png";
import carpemed from "../assets/carpemed.png";
import libraryapp from "../assets/libraryapp.png";
import energydemo from "../assets/energydemo.png";
import foodieme from "../assets/foodieme2.png";

export default class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="workcontainer">
        <div className="landingcontainer">
          <img className="landing-img" src={landingart} alt="landing-img"></img>
          <h1 className="name">Stephanie Xiao</h1>
          <h2 className="roles">Developer + Designer</h2>
          <a href="#experiences">
            <img className="down-arrow" src={downarrow} alt="down-arrow"></img>
          </a>
        </div>
        <div></div>
        <div className="projectscontainer">
          <div className="project-buffer">
            <a href="/carpemed" className="no-underline">
              <div className="project">
                <img
                  src={carpemed}
                  alt="carpemed"
                  className="project-photo"
                ></img>
                <div className="overlay">
                  <h1 className="project-title">CarpeMed</h1>
                  <h2 className="project-subtitle">
                    Software Engineering Internship, Mobile Development
                  </h2>
                </div>
              </div>
            </a>
          </div>
          <div className="project-buffer">
            <a href="/libraryapp" className="no-underline">
              <div className="project" id="experiences">
                <img src={libraryapp} className="project-photo"></img>
                <div className="overlay">
                  <h1 className="project-title">Library Scheduler App</h1>
                  <h2 className="project-subtitle">
                    Full Stack Web Development, UI/UX{" "}
                  </h2>
                </div>
              </div>
            </a>
          </div>
          <div className="project-buffer">
            <a href="/energydemo" className="no-underline">
              <div className="project">
                <img src={energydemo} className="project-photo"></img>
                <div className="overlay">
                  <h1 className="project-title">Introduction to Energy</h1>
                  <h2 className="project-subtitle">
                    Web Development, Education
                  </h2>
                </div>
              </div>
            </a>
          </div>
          <div className="project-buffer">
            <a href="/foodieme" className="no-underline">
              <div className="project">
                <img src={foodieme} className="project-photo"></img>
                <div className="overlay">
                  <h1 className="project-title">FoodieMe</h1>
                  <h2 className="project-subtitle">Mobile Development</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

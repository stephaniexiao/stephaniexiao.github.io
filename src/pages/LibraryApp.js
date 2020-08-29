import React from "react";
import "./LibraryApp.css";

//tab imports
import TopBarElement from "../components/TopBarElement";
import Resume from "../assets/resume.pdf";

import masterschedule from "../assets/masterschedule.png";
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import libraryline from "../assets/libraryline.png";

export default class LibraryApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="topbar">
          <a href="/work" className="no-underline">
            <h1 className="initials">SX</h1>
          </a>
          <div className="tabs">
            <TopBarElement title="About" link="/about" />
            <TopBarElement title="Work" link="/work#experiences" />
            <TopBarElement title="Contact" link="/contact" />
            <TopBarElement title="Resume" link={Resume} />
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-headercontainer">
            <h1 className="detail-header">Library Scheduling App</h1>
            <h2 className="detail-subheader">
              Full Stack Web Development, UI/UX
            </h2>
          </div>
          <div className="detail-text">
            <p className="text">
              As a software developer at{" "}
              <a className="textlink" href="https://codebase.berkeley.edu/">
                Berkeley Codebase
              </a>{" "}
              , I helped build a full stack web application for UC Berkeley
              Library supervisors and employees to schedule shifts and manage
              tasks using React, Express, and PostgreSQL. I worked with five
              other developers on the{" "}
              <a
                className="textlink"
                href="https://medium.com/berkeley-codebase/the-mentored-project-72db8aabb70e"
              >
                Mentored Project Team
              </a>{" "}
              , led by project managers Brian DeLeonardis and Bianca Lee. I
              collaborated most directly with Sahil Thakur and Katja Maucec to
              build the shift coverage request features and the master schedule,
              respectively.
              <br />
              <br />
              The shift coverage feature was an essential tool that the
              supervisors and employees were currently lacking. Sahil and I
              started by designing the flow between the employee who needs their
              shift covered to the employee who will cover their shift. Then,
              the shift is passed to the supervisor, who must give explicit
              approval before the shift is officially reassigned in the
              database. We then implemented the UI features as seen below.
              <br />
              <div className="library-feature">
                <div className="library-feature-left">
                  <img
                    src={cover1}
                    width="95%"
                    alt="libraryapp-cover1"
                    style={{ marginTop: "20%", marginBottom: "2%" }}
                  ></img>
                  <img
                    src={cover2}
                    width="95%"
                    alt="libraryapp-cover2"
                    style={{ marginTop: "2%", marginBottom: "2%" }}
                  ></img>
                  <img
                    src={cover3}
                    width="95%"
                    alt="libraryapp-cover3"
                    style={{ marginTop: "2%", marginBottom: "10%" }}
                  ></img>
                </div>
                <div className="library-feature-right">
                  <img
                    src={libraryline}
                    height="500px"
                    width="18px"
                    alt="bullet-line"
                    style={{ marginTop: "2%", marginBottom: "3%" }}
                  ></img>
                  <div className="library-feature-right-text">
                    <p className="feature-txt">
                      Supervisor can view all shifts that employees have
                      requested shift coverage for
                    </p>
                    <p className="feature-txt">
                      Once an employee offers to pick up the shift, the
                      supervisor can approve or deny the request
                    </p>
                    <p className="feature-txt">
                      After approving or denying the request, they can refer
                      back to this page to view their decision
                    </p>
                  </div>
                </div>
              </div>
              <br />
              Kat and I then began working on the master schedule. We were
              tasked with building the UI components as well as implementing all
              the functionalities for manually editing the schedule. After
              building the weekly calendar, we began making calls to backend to
              support adding and deleting employees from individual shifts and
              then displaying the updated employees for each shift in the master
              schedule.
            </p>
          </div>
          <img
            src={masterschedule}
            width="600px"
            alt="libraryapp-masterschedule"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          ></img>
        </div>
      </div>
    );
  }
}

import React from "react";
import "./CarpeMed.css";

//tab imports
import TopBarElement from "../components/TopBarElement";
import Resume from "../assets/resume.pdf";

import carpemedbanner from "../assets/carpemedbanner.png";
import carpemedteam from "../assets/carpemedteam.png";
import carpemedgame from "../assets/carpemedgame.png";
import carpemedslack from "../assets/carpemedslack.png";

export default class CarpeMed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="topbar">
          <a href="/#work" className="no-underline">
            <h1 className="initials">SX</h1>
          </a>
          <div className="tabs">
            <TopBarElement title="About" link="/#/about" />
            <TopBarElement title="Work" link="/#work" />
            <TopBarElement title="Contact" link="/#/contact" />
            <TopBarElement title="Resume" link={Resume} />
          </div>
        </div>
        <div className="detail-container">
          <img
            className="detail-banner"
            src={carpemedbanner}
            width="650px"
            alt="carpemed-banner"
          ></img>
          <div className="detail-headercontainer">
            <h1 className="detail-header">CarpeMed</h1>
            <h2 className="detail-subheader">
              Software Engineering Intern, Mobile Development
            </h2>
          </div>
          <div className="detail-text">
            <p className="text">
              This summer, I interned as a software engineer at{" "}
              <a className="textlink" href="https://www.carpemedtravel.com/">
                CarpeMed
              </a>{" "}
              on the full stack development team. CarpeMed is a{" "}
              <a className="textlink" href="https://skydeck.berkeley.edu/">
                Berkeley Skydeck
              </a>{" "}
              startup that aims to ensure medical access and safety to minimize
              the fear and reality of unanticipated illness or injury while
              traveling abroad.
              <br />
              <br />
              Some of my biggest contributions on the team included creating an
              interactive map to display high-quality medical providers when
              traveling abroad, designing personalized health profiles for users
              to store their medical records and health insurance, and managing
              users' scheduled trip information using React Redux, React
              Context, and custom React Hooks. Technologies: React Native,
              GraphQL, AWS.
              <br />
              <br />
              The team is currently in the final steps of completing and
              deploying the app, so stay tuned for a github and App store link.
              In the meantime, here are a few fun photos to sum up my remote
              experience!
            </p>
          </div>
          <img src={carpemedteam} width="650px" alt="carpemed-team"></img>
          <img
            src={carpemedgame}
            width="650px"
            alt="carpemed-game"
            style={{ marginTop: "2%" }}
          ></img>
          <img
            src={carpemedslack}
            width="300px"
            alt="carpemed-slack"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          ></img>
        </div>
      </div>
    );
  }
}

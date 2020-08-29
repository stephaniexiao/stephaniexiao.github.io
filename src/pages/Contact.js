import React from "react";
import "./Contact.css";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import spotify from "../assets/spotify.png";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contactcontainer">
        <h1 className="contactmessage">Connect with me!</h1>
        <h2 className="email">stephaniex@berkeley.edu</h2>
        <div className="icons">
          <a href="https://www.linkedin.com/in/stephaniexiao/">
            <img
              className="linkedin"
              src={linkedin}
              alt="linkedin"
              width="45"
              height="45"
            ></img>
          </a>
          <a href="https://github.com/stephaniexiao">
            <img
              className="github"
              src={github}
              alt="github"
              width="45"
              height="45"
            ></img>
          </a>
          <a href="https://open.spotify.com/user/infinitelysteph">
            <img
              className="spotify"
              src={spotify}
              alt="spotify"
              width="45"
              height="45"
            ></img>
          </a>
        </div>
      </div>
    );
  }
}

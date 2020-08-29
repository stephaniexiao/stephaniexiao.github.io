import React from "react";
import "./About.css";
import steph from "../assets/steph.JPG";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="aboutcontainer">
        <div className="abouttext">
          <p className="text">
            Hi there! I'm Stephanie, a developer and designer studying Computer
            Science + Sustainable Design at UC Berkeley. I love building and
            designing platforms that spread positivity and make a difference!
            <br />
            <br />
            On campus, you can find me building projects as a software developer
            at{" "}
            <a className="textlink" href="https://codebase.berkeley.edu/">
              Berkeley Codebase
            </a>
            , teching fundamental data science concepts as a{" "}
            <a className="textlink" href="http://data8.org/">
              Data 8 Tutor
            </a>
            , and creating promotional graphics and social media campaigns as
            Vice President of Marketing at{" "}
            <a className="textlink" href="https://www.ethicalapparel.org/">
              EthiCAL Apparel
            </a>
            .
            <br />
            <br />
            In my free time, I enjoy practicing calligraphy, traveling to new
            places to get the perfect photo, and competing against my sister in
            MasterChef mystery box cooking challenges.
          </p>
        </div>
        <img
          className="headshot"
          src={steph}
          alt="headshot"
          width="300"
          height="390"
          style={{ borderRadius: "25px" }}
        ></img>
      </div>
    );
  }
}

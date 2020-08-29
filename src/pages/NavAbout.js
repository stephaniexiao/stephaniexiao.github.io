import React from "react";
import "../components/TopBarElement.css";
import TopBarElement from "../components/TopBarElement";
import Resume from "../assets/resume.pdf";

import About from "./About";
import "./NavAbout.css";

export default function NavWork(props) {
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
      <div class="about">
        <About />
      </div>
    </div>
  );
}

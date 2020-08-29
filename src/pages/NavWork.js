import React from "react";
import "../components/TopBarElement.css";
import TopBarElement from "../components/TopBarElement";
import Work from "./Work";
import Resume from "../assets/resume.pdf";
import "./NavWork.css";

export default function NavWork(props) {
  return (
    <div>
      <div class="topbar">
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
      <div class="cover">
        <Work />
      </div>
    </div>
  );
}

import React from "react";
import "../components/TopBarElement.css";
import TopBarElement from "../components/TopBarElement";
import Contact from "./Contact";
import Resume from "../assets/resume.pdf";
import "./NavContact.css";

export default function NavContact(props) {
  return (
    <div>
      <div class="topbar">
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
      <div class="contact">
        <Contact />
      </div>
    </div>
  );
}

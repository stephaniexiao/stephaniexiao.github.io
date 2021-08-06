import React from "react";
import { Link } from 'react-router-dom';
import "../components/TopBarElement.css";
import TopBarElement from "../components/TopBarElement";
import ResumeNavElement from "../components/ResumeNavElement"
import Contact from "./Contact";
import Resume from "../assets/resume.pdf";
import "./NavContact.css";

export default function NavContact(props) {
  return (
    <div>
      <div class="topbar">
        <Link to="/work" className="no-underline">
          <h1 className="initials">SX</h1>
        </Link>
        <div className="tabs">
          <TopBarElement title="About" link="/about" />
          <TopBarElement title="Work" link="/work" />
          <TopBarElement title="Contact" link="/contact" />
          <ResumeNavElement title="Resume" link={Resume} />
        </div>
      </div>
      <div class="contact">
        <Contact />
      </div>
    </div>
  );
}

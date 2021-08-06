import React from 'react';
//tab imports
import TopBarElement from "../components/TopBarElement";
import ResumeNavElement from "../components/ResumeNavElement"
import SmoothScrollElement from "../components/SmoothScrollElement"
import Resume from "../assets/resume.pdf";

export default function NavTabs() {
  return (
    <div className="tabs">
      <TopBarElement title="About" link="/about" />
      <SmoothScrollElement title="Work" link="/#work" />
      <TopBarElement title="Contact" link="/contact" />
      <ResumeNavElement title="Resume" link={Resume} />
    </div>
  )
}
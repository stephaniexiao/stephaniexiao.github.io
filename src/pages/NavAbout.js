import React from "react";
import { Link } from 'react-router-dom';
import "../components/TopBarElement.css";
import NavTabs from "./NavTabs";

import About from "./About";
import "./NavAbout.css";

export default function NavWork(props) {
  return (
    <div>
      <div className="topbar">
        <Link to="/work" className="no-underline">
          <h1 className="initials">SX</h1>
        </Link>
        <NavTabs />
      </div>
      <div class="about">
        <About />
      </div>
    </div>
  );
}

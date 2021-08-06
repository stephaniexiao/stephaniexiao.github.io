import React from "react";
import { Link } from 'react-router-dom';
import "../components/TopBarElement.css";
import Contact from "./Contact";
import NavTabs from "./NavTabs";
import "./NavContact.css";

export default function NavContact(props) {
  return (
    <div>
      <div class="topbar">
        <Link to="/work" className="no-underline">
          <h1 className="initials">SX</h1>
        </Link>
        <NavTabs />
      </div>
      <div class="contact">
        <Contact />
      </div>
    </div>
  );
}

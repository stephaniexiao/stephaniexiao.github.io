import React from "react";
import { Link } from 'react-router-dom';
import "../components/TopBarElement.css";
import Work from "./Work";
import NavTabs from "./NavTabs";
import "./NavWork.css";

export default function NavWork(props) {
  return (
    <div>
      <div class="topbar">
        <Link to="/work" className="no-underline">
          <h1 className="initials">SX</h1>
        </Link>
        <NavTabs />
      </div>
      <div class="cover">
        <Work />
      </div>
    </div>
  );
}

import React from "react";
import { Link }  from 'react-router-dom';
import "./TopBarElement.css";

export default function TopBarElement(props) {
  return (
    <div className="TopBarElement">
      <Link className="title" to={props.link}>
        {props.title}
      </Link>
    </div>
  );
}

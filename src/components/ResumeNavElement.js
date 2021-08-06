import React from "react";
import { Link }  from 'react-router-dom';
import "./TopBarElement.css";

export default function TopBarElement(props) {
  return (
    <div className="TopBarElement">
      <a className="title" href={props.link}>
        {props.title}
      </a>
    </div>
  );
}
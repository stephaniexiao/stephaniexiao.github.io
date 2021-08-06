import React from "react";
import "./TopBarElement.css";

export default function SmoothScrollElement(props) {
  return (
    <div className="TopBarElement">
      <a className="title" href={props.link}>
        {props.title}
      </a>
    </div>
  );
}
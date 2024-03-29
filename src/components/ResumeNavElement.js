import React from "react";
import "./TopBarElement.css";

export default function ResumeNavElement(props) {
  return (
    <div className="TopBarElement">
      <a className="title" href={props.link} without rel="noopener noreferrer" target="_blank">
        {props.title}
      </a>
    </div>
  );
}
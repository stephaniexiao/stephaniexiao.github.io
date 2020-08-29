import React from "react";
import "./FoodieMe.css";

//tab imports
import TopBarElement from "../components/TopBarElement";
import Resume from "../assets/resume.pdf";

import foodiehome from "../assets/foodiehome.png";
import foodielist from "../assets/foodielist.png";

export default class EnergyDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="topbar">
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
        <div className="detail-container">
          <div className="detail-headercontainer">
            <h1 className="detail-header">FoodieMe</h1>
            <h2 className="detail-subheader">Mobile Development</h2>
          </div>
          <div className="detail-text">
            <p className="text">
              FoodieMe is a mobile application that allows users to create a
              list of their favorite foods, explore local restaurants, and share
              their findings with friends. Through the creation of this app, I
              learned the basics of React Navigation, Context, and reusable
              custom hooks. Additionally, I made calls to the Yelp API so the
              user can browse restaurants near them. Lastly, I used Expo
              Contacts and Permissions to allow users to send their restaurant
              findings with friends!
            </p>
          </div>
          <div className="foodie-img">
            <img
              src={foodiehome}
              width="300px"
              alt="foodie-home"
              style={{ marginBottom: "2%", marginRight: "3%" }}
            ></img>
            <img
              src={foodielist}
              width="300px"
              alt="foodie-list"
              style={{ marginBottom: "2%", marginLeft: "3%" }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

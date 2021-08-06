import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/NavAbout";
import Work from "./pages/NavWork";
import Contact from "./pages/NavContact";
import CarpeMed from "./pages/CarpeMed";
import LibraryApp from "./pages/LibraryApp";
import EnergyDemo from "./pages/EnergyDemo";
import FoodieMe from "./pages/FoodieMe";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Work} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/carpemed" component={CarpeMed} />
          <Route path="/libraryapp" component={LibraryApp} />
          <Route path="/energydemo" component={EnergyDemo} />
          <Route path="/foodieme" component={FoodieMe} />
        </Switch>
      </Router>
    );
  }
}

export default App;

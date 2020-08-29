import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/carpemed" component={CarpeMed} />
          <Route exact path="/libraryapp" component={LibraryApp} />
          <Route exact path="/energydemo" component={EnergyDemo} />
          <Route exact path="/foodieme" component={FoodieMe} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>hi</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from "react";
import Wizard from "./components/Wizard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <h2>KredX Deal creation</h2>
        </div>
        <Wizard />
      </div>
    );
  }
}

export default App;

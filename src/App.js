import React, { Component } from "react";
import "./App.css";

const team = {
  membre1: {
    nom: "Yoaki",
    age: 22,
  },
  membre2: {
    nom: "Random",
    age: 25,
  },
};

class App extends Component {
  state = {
    team,
  };
  render() {
    return (
      <div className='App'>
        <h1> {this.state.team.membre1.nom} </h1>
      </div>
    );
  }
}

export default App;

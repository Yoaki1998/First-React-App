import React, { Component } from "react"
import "./App.css"

const team = {
  membre1: {
    nom: "Yoaki",
    age: 22
  },
  membre2: {
    nom: "Random",
    age: 25
  }
}

class App extends Component {
  state = {
    team
  }
  handleChange = (event) => {
    const team = { ...this.state.team }
    const nom = event.target.value
    console.log(nom)
    team.membre1.nom = nom
    this.setState({ team })
  }
  render() {
    return (
      <div className='App'>
        <input
          type='text'
          value={this.state.team.membre1.nom}
          onChange={this.handleChange}
        />
        <h1> {this.state.team.membre1.nom} </h1>
        <h1> {this.state.team.membre2.nom} </h1>
      </div>
    )
  }
}

export default App

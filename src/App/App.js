import React, { Component } from 'react';
import './App.css';
import Film from '../Film/Film'
import Button from '../button/button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      film: {},
    }
  }

  componentWillMount() {
    fetch('https://swapi.co/api/films')
      .then((response) => response.json())
      .then((json) => {
        const random = Math.floor((Math.random() * json.results.length))
        this.setState({ film: json.results[random] })
      })

  }

  fetchData(call, state) {
    fetch(`https://swapi.co/api/${call}`)
    .then((response) => response.json())
    .then((json) => { return this.setState({ [state]: json }) })
  }

  render() {
    return (
      <div className="App">
        <div className="film-container">
          <Film filmData={ this.state.film }/>
        </div>
        <div className="swapi-cards">
          <h2>SWAPI BOX</h2>
          <Button fetchData={(call, state) => this.fetchData(call, state)} call='people'/>
          <Button fetchData={(call, state) => this.fetchData(call, state)} call='vehicles'/>
          <Button fetchData={(call, state) => this.fetchData(call, state)} call='planets'/>
          </div>
        </div>
      );
    }
  }

export default App;

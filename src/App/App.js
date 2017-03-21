import React, { Component } from 'react';
import './App.css';
import Film from '../Film/Film'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      films: {},
    }
  }

  componentWillMount() {
    this.fetchData("films", "films")
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
        </div>
        <div className="swapi-cards">
          <h2>SWAPI BOX</h2>
          <Film
            filmData={ this.state.films.results }/>
          </div>
        </div>
      );
    }
  }

export default App;

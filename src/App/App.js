import React, { Component } from 'react';
import './App.css';
import Film from '../Film/Film';
import Button from '../button/button';
import CardWrapper from '../CardWrapper/CardWrapper';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      peopleData: [],
      planetData: [],
      vehicleData: [],
      filmData: {},
      view:''
    }
  }

  componentWillMount() {
    fetch('https://swapi.co/api/films')
      .then((response) => response.json())
      .then((json) => {
        const random = Math.floor((Math.random() * json.results.length))
        this.setState({ filmData: json.results[random] })
      })

  }

  fetchData(call, state) {
    fetch(`https://swapi.co/api/${call}`)
    .then((response) => response.json())
    .then((json) => { return this.setState({ [state]: json }) })
  }

  toggleView(){
    switch(this.state.view){
      case 'people':
        console.log('people')
        break
      case 'vehicles':
        console.log('vehicles')
        break
      case 'planets':
        console.log('planets')
        break
      default:
        console.log('hey')
    }
  }

  render() {
    return (
      <div className="App">
        <div className="film-container">
          <Film filmData={ this.state.filmData }/>
        </div>
        <div className="swapi-headder">
          <h2>SWAPI BOX</h2>
          <Button fetchData={(call, state) => this.fetchData(call, state)} call='people'/>
        </div>
          <CardWrapper data={this.state.data.results}/>
      </div>
    )
  }
}

export default App;

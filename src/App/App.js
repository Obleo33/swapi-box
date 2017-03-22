import React, { Component } from 'react';
import './App.css';
import Film from '../Film/Film';
import Button from '../button/button';
import People from '../People/People';
import dataCleaner from '../dataHelper'

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
        this.setState({ film: json.results[random] })
      })

  }

  fetchData(call, state) {
    fetch(`https://swapi.co/api/${call}`)
    .then((response) => response.json())
    .then((json) => { return this.setState({ [state]: json }) })
  }

  mountData(data, state){
    this.setState({ [state]: data })
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
        dataCleaner()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="film-container">
          <Film filmData={ this.state.film }/>
        </div>
        <div className="swapi-headder">
          <h2>SWAPI BOX</h2>
          <Button fetchData={(call, state) => this.fetchData(call, state)} call='people'/>
          <Button fetchData={(call, state) => this.fetchData(call, state)} call='vehicles'/>
          <Button fetchData={(call, state) => this.fetchData(call, state)} call='planets'/>
        </div>
          {this.toggleView()}
      </div>
    )
  }
}

export default App;

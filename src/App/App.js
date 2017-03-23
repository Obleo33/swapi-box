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
      filmData: {},
      view:'',
      favorites: []
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
    .then((json) => { return this.setState({ [state]: json , view: call }) })
  }

  addToFavorites(props) {
    this.state.favorites.push({...props}),
    this.setState({ favorites: this.state.favorites })
  }

  render() {
    return (
      <div className="App">
        <div className="film-container">
          <Film filmData={ this.state.filmData }/>
        </div>
        <div className="swapi">
          <div className="swapi-nav">
            <h2>SWAPI BOX</h2>
            <Button fetchData={(call, state) => this.fetchData(call, state)} call='people'/>
            <Button fetchData={(call, state) => this.fetchData(call, state)} call='planets'/>
            <Button fetchData={(call, state) => this.fetchData(call, state)} call='vehicles'/>
          </div>
          <CardWrapper data={this.state.data.results}
                       view={this.state.view}
                       addToFavorites={(props) => this.addToFavorites(props)}/>
        </div>
      </div>
    )
  }
}

App.propType = {
  data: React.PropTypes.object.isRequired,
  filmData: React.PropTypes.object.isRequired,
  view: React.PropTypes.string
}

export default App;

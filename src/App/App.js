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
      favorites: [],
      toggleFav: false
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

  addToFavorites(props, type) {
    const favKeys = this.state.favorites.map(card => card.name)
    const found = favKeys.indexOf(props.name)
    if( found === -1){
      this.state.favorites.push({name: props.name, data: [{...props}], view: type}),
      this.setState({ favorites: this.state.favorites })
    } else {
      const filtered = this.state.favorites.filter((card, i) => i !== found)
      this.setState({ favorites: filtered})
    }
  }

  viewFavorites() {
    this.state.favorites.length === 0 && null
    return this.state.favorites.map(card => {
      return <CardWrapper data={card.data}
                          view={card.view}
                          addToFavorites={(props, type) => this.addToFavorites(props, type)}/>
    })
  }

  toggle() {
    this.setState({ toggleFav: !this.state.toggleFav})
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
            <button onClick={() => this.toggle()}>View Favorites {this.state.favorites.length}</button>
            <Button fetchData={(call, state) => this.fetchData(call, state)} call='people'/>
            <Button fetchData={(call, state) => this.fetchData(call, state)} call='planets'/>
            <Button fetchData={(call, state) => this.fetchData(call, state)} call='vehicles'/>
          </div>
          <div className='swapi-cards'>
            <div className='swapi-favorites'>
              {this.state.toggleFav? this.viewFavorites(): null}
            </div>
            <CardWrapper data={this.state.data.results}
                         view={this.state.view}
                         addToFavorites={(props, type) => this.addToFavorites(props, type)}/>
          </div>
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

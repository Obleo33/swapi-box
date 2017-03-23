import React, { Component } from 'react'
import styles from './Planets'
import classNames from 'classnames'

class Planets extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      terrain: '',
      population: '',
      climate: '',
      residents: [],
      starred: false
    }
  }

  fetchData(call) {
    fetch(call).then(response => response.json())
    .then(json => {
      this.state.residents.push(json.name)
      this.setState({ residents: this.state.residents })
    })
  }

  getResidents(){
    this.props.residents.map((api) => {
      this.fetchData(api)
    })
  }

  componentDidMount(){
    this.setState({ name: this.props.name,
                    terrain: this.props.terrain,
                    population: this.props.population,
                    climate: this.props.climate,
                  })
    this.getResidents(this.props.residents)
  }

  handleClick() {
    this.setState({ starred: !this.state.starred})
    this.props.addToFavorites(this.props, 'planets')
  }

  render(){
    this.cardClass = classNames({
      "planet-card": true,
      "card": true,
      "favorite": this.state.starred
    })
    this.buttonClass = classNames({
      "favorite-button": true,
      "favorite": this.state.starred
    })

    !this.props.data && null
    return (
      <div className={this.cardClass} key={'planets' + this.props.index}>
        <div className="card-head">
          <h3>{this.state.name}</h3>
          <button className={this.buttonClass} onClick={this.handleClick.bind(this)}>&#x2605;</button>
        </div>
        <div className='card-body'>
          <p>Terrain: {this.state.terrain}</p>
          <p>Population: {this.state.population !== 'unknown'? parseInt(this.state.population).toLocaleString(): 'unknown'}</p>
          <p>Climate: {this.state.climate}</p>
          <p>Residents: {this.state.residents.length? this.state.residents.join(', '): 'unknown'}</p>
        </div>
      </div>
    )
  }
}

export default Planets;


// parseInt(this.state.population).toLocaleString()

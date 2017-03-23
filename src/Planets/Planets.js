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
  }

  render(){
    this.cardClass = classNames({
      "planet-card": true,
      "favorite": this.state.starred
    })
    this.buttonClass = classNames({
      "favorite-button": true,
      "favorite": this.state.starred
    })

    !this.props.data && null
    return (
      <div className={this.cardClass} key={this.props.index}>
        <p>{this.state.name}</p>
        <p>{this.state.terrain}</p>
        <p>{this.state.population}</p>
        <p>{this.state.climate}</p>
        <p>{this.state.residents}</p>
        <button className={this.buttonClass} onClick={this.handleClick.bind(this)}>&#x2605;</button>
      </div>
    )
  }
}

export default Planets;

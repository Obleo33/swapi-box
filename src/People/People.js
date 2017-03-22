import React, { Component } from 'react'
import styles from './People'

class People extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      homeworld: '',
      species: '',
      population: '',
      starred: false
    }
  }

  fetchData(call, state, key) {
    fetch(call).then(response => response.json())
    .then(json => this.setState({ [state]: json[[key]] }))
  }

  componentDidMount(){
    this.setState({ name: this.props.name,
                    homeworld: this.fetchData(this.props.homeworld, 'homeworld', 'name'),
                    species: this.fetchData(this.props.species, 'species', 'name'),
                    population: this.fetchData(this.props.homeworld, 'population', 'population'),
                  })
  }

  handleClick() {
    console.log(this.state.name + ' clicked')
  }

  render(){
    !this.props.data && null
    return (
      <div className="people-card">
        <p>Name: {this.state.name}</p>
        <p>Species: {this.state.species}</p>
        <p>Homeworld: {this.state.homeworld}</p>
        <p>Population: {this.state.population}</p>
        <button className="favorite-button button" onClick={this.handleClick.bind(this)}>&#x2605;</button>
      </div>
    )
  }
}

export default People;

import React, { Component } from 'react'
import styles from './People'
import classNames from 'classnames'

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
    this.setState({ starred: !this.state.starred})
  }

  render(){
    this.cardClass = classNames({
      "people-card": true,
      "favorite": this.state.starred
    })
    this.buttonClass = classNames({
      "favorite-button": true,
      "favorite": this.state.starred
    })

    !this.props.data && null
    return (
      <div className={this.cardClass} key={this.props.index}>
        <p>Name: {this.state.name}</p>
        <p>Species: {this.state.species}</p>
        <p>Homeworld: {this.state.homeworld}</p>
        <p>Population: {this.state.population}</p>
        <button className={this.buttonClass} onClick={this.handleClick.bind(this)}>&#x2605;</button>
      </div>
    )
  }
}

export default People;

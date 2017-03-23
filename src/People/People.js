import React, { Component } from 'react'
import './People.css'
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
    this.props.addToFavorites(this.props, 'people')
  }

  render(){
    this.cardClass = classNames({
      "people-card": true,
      "card": true,
      "favorite": this.state.starred
    })
    this.buttonClass = classNames({
      "favorite-button": true,
      "favorite": this.state.starred
    })

    !this.props.data && null
    return (
      <div className={this.cardClass} key={'people' + this.props.index}>
        <div className="card-head">
          <h3>{this.state.name}</h3>
          <button className={this.buttonClass} onClick={this.handleClick.bind(this)}>&#x2605;</button>
        </div>
        <p>Species: {this.state.species}</p>
        <p>Homeworld: {this.state.homeworld}</p>
        <p>Population: {this.state.population !== 'unknown'? parseInt(this.state.population).toLocaleString(): 'unknown'}</p>
      </div>
    )
  }
}

export default People;

import React, { Component } from 'react'

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
    console.log('clicked')
  }

  render(){
    !this.props.data && null
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.homeworld}</p>
        <p>{this.state.species}</p>
        <p>{this.state.population}</p>
        <button onClick={this.handleClick.bind(this)}></button>
      </div>
    )
  }
}

export default People;

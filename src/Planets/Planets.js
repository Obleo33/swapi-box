import React, { Component } from 'react'

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
    console.log(this.props.residents);
    this.setState({ name: this.props.name,
                    terrain: this.props.terrain,
                    population: this.props.population,
                    climate: this.props.climate,
                  })
    this.getResidents(this.props.residents)
  }

  handleClick() {
    console.log('clicked')
  }

  render(){
    !this.props.data && null
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.terrain}</p>
        <p>{this.state.population}</p>
        <p>{this.state.climate}</p>
        <p>{this.state.residents}</p>
        <button onClick={this.handleClick.bind(this)}></button>
      </div>
    )
  }
}

export default Planets;

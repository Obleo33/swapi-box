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

  fetchData(call, state) {
    fetch(call)
    .then((response) => response.json())
    .then((json) => { return this.setState({ [state]: json }) })
  }

  handleClick() {

  }

  componentDidMount(){
    this.setState({ name: this.props.name,
                    homeworld: this.fetchData(this.props.homeworld),
                    species: ,
                    population:
                  })
  }

  render(){
    console.log(this.state)
    if(!this.props.data){ return null }
    return (
      <div>hey</div>
    )
  }
}

export default People;

import React, { Component } from 'react'

class Vehicles extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      model: '',
      class: '',
      passengers: '',
      starred: false
    }
  }

  fetchData(call, state, key) {
    fetch(call).then(response => response.json())
    .then(json => this.setState({ [state]: json[[key]] }))
  }

  componentDidMount(){
    this.setState({ name: this.props.name,
                    model: this.props.model,
                    class: this.props.class,
                    passengers: this.props.passengers,
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
        <p>{this.state.model}</p>
        <p>{this.state.class}</p>
        <p>{this.state.passengers}</p>
        <button onClick={this.handleClick.bind(this)}></button>
      </div>
    )
  }
}

export default Vehicles;

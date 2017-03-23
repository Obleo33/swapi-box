import React, { Component } from 'react'
import styles from './Vehicles'
import classNames from 'classnames'

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
    this.setState({ starred: !this.state.starred})
  }

  render(){
    this.cardClass = classNames({
      "vehicle-card": true,
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
        <p>{this.state.model}</p>
        <p>{this.state.class}</p>
        <p>{this.state.passengers}</p>
        <button className={this.buttonClass} onClick={this.handleClick.bind(this)}>&#x2605;</button>
      </div>
    )
  }
}

export default Vehicles;

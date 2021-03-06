import React, { Component } from 'react'
import './Vehicles.css'
import classNames from 'classnames'

class Vehicles extends Component{
  constructor(){
    super()
    this.state = {
      name: '',
      model: '',
      vehicle_class: '',
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
                    vehicle_class: this.props.vehicle_class,
                    passengers: this.props.passengers,
                  })

  }

  handleClick() {
    this.setState({ starred: !this.state.starred})
    this.props.addToFavorites(this.props, 'vehicles')
  }

  render(){
    this.cardClass = classNames({
      "vehicle-card": true,
      "card": true,
      "favorite": this.state.starred
    })
    this.buttonClass = classNames({
      "favorite-button": true,
      "favorite": this.state.starred
    })


    !this.props.data && null
    return (
      <div className={this.cardClass} key={'vehicles' + this.props.index}>
        <div className="card-head">
          <h3>{this.state.name}</h3>
          <button className={this.buttonClass} onClick={this.handleClick.bind(this)}>&#x2605;</button>
        </div>
        <div className='card-body'>
          <p>Model: {this.state.model}</p>
          <p>Class: {this.state.vehicle_class}</p>
          <p>Passengers: {this.state.passengers}</p>
        </div>
      </div>
    )
  }
}

export default Vehicles;

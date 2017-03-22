// Name
// Homeworld
// Species
// Population of Homeworld
import React, { Component } from 'react'
// import StarCards from '../StarCards/StarCards'

class People extends Component{
  constructor(data){
    super(data)
    this.state = {
      data: {},
      people: [],
    }
  }

  dataLoad(){
    this.setState({ data: this.props.data })
  }

  peopleData(){

  }

  render(){
    if(this.props.data){
      console.log(this.props.data)
      return (
        <div>hey</div>
      )
    }
    return (
      <div>nope</div>
    )
  }
}

export default People;

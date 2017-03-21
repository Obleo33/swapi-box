import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super(),
    this.state = {
      data: {},
    }
  }

  componentWillMount() {
    this.fetchData('people')
  }

  fetchData(call) {
    const dataCall = fetch(`https://swapi.co/api/${call}`)
      .then((response) => response.json())
        .then((json) => { return this.setState({ data: json })})
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <div className="film-container">

        </div>
        <div className="swapi-cards">
          <h2>SWAPI BOX</h2>
          {/* <StarCards data={this.state.data.results}
                     fetch={() => this.fetchData()}
                     next={this.state.data.next}
                     previous={this.state.data.previous}/> */}
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('has a dive with the class of swapi', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('.app'))
  })


})

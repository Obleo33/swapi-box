import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have an intial state of null for its props', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.state().data).toEqual({});
  });

  // it('should have a component called ScrollingText', () => {
  //   const wrapper = shallow(<App />)
  //
  //   expect(wrapper.find(ScrollingText)).to.have.length.of(1);
  // });
});

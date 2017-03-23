import React from 'react';
import ReactDOM from 'react-dom';
import People from "./People"
import { shallow, mount } from 'enzyme';


describe('People', () => {

  it('should render a People Card', () => {
    const wrapper = shallow(<People />);

    expect(wrapper.find('.people-card').length).toBe(1);
  });

  it('has a state of name that defaults to an empty string', () => {
    const wrapper = shallow(<People />);

    expect(typeof wrapper.state().name).toBe('string');
  });

  it('has a state of homeworld that defaults to an empty string', () => {
    const wrapper = shallow(<People />);

    expect(typeof wrapper.state().homeworld).toBe('string');
  });
  it('has a state of species that defaults to an empty string', () => {
    const wrapper = shallow(<People />);

    expect(typeof wrapper.state().species).toBe('string');
  });

  it('has a state of population that defaults to an empty string', () => {
    const wrapper = shallow(<People />);

    expect(typeof wrapper.state().population).toBe('string');
  });

it('has a state of starred that defaults to a boolean', () => {
    const wrapper = shallow(<People />);

    expect(typeof wrapper.state().starred).toBe('boolean');
  });

  // it('has a state of filmData that defaults to an empty object', () => {
  //   const wrapper = shallow(<App />);
  //
  //   expect(typeof wrapper.state().filmData).toBe('object');
  // });
  //
  // it('has a state of view that defaults to an empty string', () => {
  //   const wrapper = shallow(<App />);
  //
  //   expect(typeof wrapper.state().view).toBe('string');
  // });


 });

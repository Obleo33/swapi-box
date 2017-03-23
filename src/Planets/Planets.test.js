import React from 'react';
import ReactDOM from 'react-dom';
import Planets from './Planets'
import { shallow, mount } from 'enzyme';

describe('Planets', () => {

  it('has a state of name that defaults to an empty string', () => {
    const wrapper = shallow(<Planets />);

    expect(typeof wrapper.state().name).toBe('string');
  });

  it('has a state of terrain that defaults to an empty string', () => {
    const wrapper = shallow(<Planets />);

    expect(typeof wrapper.state().terrain).toBe('string');
  });

  it('has a state of population that defaults to an empty string', () => {
    const wrapper = shallow(<Planets />);

    expect(typeof wrapper.state().population).toBe('string');
  });

  it('has a state of climate that defaults to an empty string', () => {
    const wrapper = shallow(<Planets />);

    expect(typeof wrapper.state().climate).toBe('string');
  });

  it('has a state of residents that defaults to an empty array', () => {
    const wrapper = shallow(<Planets />);

    expect(wrapper.state().residents).toEqual([]);
  });

  it('has a state of starred that defaults to a boolean', () => {
    const wrapper = shallow(<Planets />);

    expect(typeof wrapper.state().starred).toBe('boolean');
  });
});

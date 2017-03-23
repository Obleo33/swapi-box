import React from 'react';
import ReactDOM from 'react-dom';
import Film from './Film';
import { shallow, mount } from 'enzyme';

describe('Film', () => {

  it('should return a div', () => {
    const wrapper = shallow(<Film />)

    expect(wrapper.find('div').length).toBe(1)
  })
});

import React from 'react';
import ReactDOM from 'react-dom';
import CardWrapper from './CardWrapper';
import { shallow, mount } from 'enzyme';


describe('CardWrapper', () => {
  it('should return a div', () => {
    const wrapper = shallow(<CardWrapper />);
    console.log(wrapper)
  });
});

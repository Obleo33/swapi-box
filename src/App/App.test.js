import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardWrapper from '../CardWrapper/CardWrapper'
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Button from '../button/button'

describe('App', () => {


  it('should render three button components', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('Button').length).toBe(3);
  });

  it('should render a CardWrapper component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('CardWrapper').length).toBe(1);
  });

  it('should render a Film component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('Film').length).toBe(1);
  });

  it('has a state of data that defaults to an empty object', () => {
    const wrapper = shallow(<App />);

    expect(typeof wrapper.state().data).toBe('object');
  });

  it('has a state of filmData that defaults to an empty object', () => {
    const wrapper = shallow(<App />);

    expect(typeof wrapper.state().filmData).toBe('object');
  });

  it('has a state of view that defaults to an empty string', () => {
    const wrapper = shallow(<App />);

    expect(typeof wrapper.state().view).toBe('string');
  });

  it('should have a people button that pulls back the people object', () => {
    const wrapper = mount(<App />)
    const button = wrapper.find(Button)


  });

 });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardWrapper from '../CardWrapper/CardWrapper'
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';

describe('App', () => {


  // it('should render a CardWrapper component', () => {
  //   const wrapper = shallow(<App />);
  //
  //   expect(wrapper.find(CardWrapper)).to.have.length(1);
  // });

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

  it('does the thing', () => {
    
  });

//   it('displays an error if fetching groceries fails', async () => {
// fetchMock.get('/api/v1/groceries', {
//   status: 500
// });
//
// const wrapper = mount(<App />);
// await wrapper.update();
//
// expect(wrapper.state('errorStatus')).toEqual('Error fetching groceries');
// expect(wrapper.find('.error').length).toEqual(1);
// });




 });

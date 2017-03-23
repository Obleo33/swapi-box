import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './Vehicles'
import { shallow, mount } from 'enzyme';


describe('Vehicle', () => {

    it('has a state of name that defaults to an empty string', () => {
      const wrapper = shallow(<Vehicles />);

      expect(typeof wrapper.state().name).toBe('string');
    });

    it('has a state of model that defaults to an empty string', () => {
      const wrapper = shallow(<Vehicles />);

      expect(typeof wrapper.state().model).toBe('string');
    });

    it('has a state of class that defaults to an empty string', () => {
      const wrapper = shallow(<Vehicles />);

      expect(typeof wrapper.state().vehicle_class).toBe('string');
    });

    it('has a state of passengers that defaults to an empty string', () => {
      const wrapper = shallow(<Vehicles />);

      expect(wrapper.state().passengers).toEqual('');
    });

    it('has a state of starred that defaults to a boolean', () => {
      const wrapper = shallow(<Vehicles />);

      expect(typeof wrapper.state().starred).toBe('boolean');
    });
    //
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

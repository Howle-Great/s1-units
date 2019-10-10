import {fakeOrders} from '../mock/fakeOrders';

import React from 'react';
import Order from './Order';
import {sortTypes} from '../utils/sortOrders';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Order component', () => {

  it('render with fakeOrders', () => {
    const wrapper = shallow(
      <Order
        order = {fakeOrders} 
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with first element of fakeOrders', () => {
    const wrapper = shallow(
      <Order
        order = {fakeOrders[0]} 
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with empty object', () => {
    const wrapper = shallow(
      <Order
        order = {{}} 
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('set state COUNT', () => {
  //   // вариант 1
  //   // wrapper.setState({sortType: sortTypes.COUNT});
  //   // expect(toJson(wrapper)).toMatchSnapshot();

  //   // вариант 2
  //   wrapper.find('select').simulate('change', {
  //     target: {value: sortTypes.COUNT}
  //   });

  //   expect(wrapper.state('sortType')).toEqual(sortTypes.COUNT);
  // });
});

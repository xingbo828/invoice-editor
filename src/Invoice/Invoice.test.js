import React from 'react';
import { shallow } from 'enzyme';
import Invoice from './Invoice';

it('should match snapshot', () => {
  const wrapper = shallow(<Invoice />);
  expect(wrapper).toMatchSnapshot()
});
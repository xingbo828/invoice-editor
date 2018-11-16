import React from 'react';
import { shallow } from 'enzyme';
import Catalogue from './Catalogue';

it('should match snapshot', () => {
  const wrapper = shallow(<Catalogue handleCheckout={() => {}}/>);
  expect(wrapper).toMatchSnapshot()
});
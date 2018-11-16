import React from 'react';
import { shallow } from 'enzyme';
import PriceSummary from './PriceSummary';

const props = {
  subtotal: 100,
  tax: 5,
  total: 105,
  formatter: {
    format: p => p
  }
}
it('should match snapshot', () => {
  const wrapper = shallow(<PriceSummary {...props} />);
  expect(wrapper).toMatchSnapshot()
});
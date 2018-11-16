import React from 'react';
import { shallow } from 'enzyme';
import ProductSummary from './ProductSummary';

const props = {
  products: [{
    product: {
      title: 'a',
      price: 25,
      id: 'a'
    },
    quantity: 2
  }],
  handleRemove: () => {}
}
it('should match snapshot', () => {
  const wrapper = shallow(<ProductSummary {...props} />);
  expect(wrapper).toMatchSnapshot()
});
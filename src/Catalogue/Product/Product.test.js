import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';

const props = {
  handleChange: () => {},
  productDetail: {
    title: 'A',
    image: 'B',
    price: 25
  },
  quantity: 3,
  unit: 'Qty'
}
it('should match snapshot', () => {
  const wrapper = shallow(<Product {...props} />);
  expect(wrapper).toMatchSnapshot()
});
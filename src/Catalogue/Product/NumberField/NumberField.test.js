import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { mount } from 'enzyme';
import NumberField from './';

const onChange = jest.fn();
const props = {
  unit: 'Qty',
  value: 5
};
describe('NumberField', () => {
  it('handles inc click', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <NumberField {...props} onChange={onChange} />
      </ThemeProvider>
    );
    wrapper
      .find('[data-test="plusHandler"]')
      .last()
      .simulate('click');
    expect(onChange).toBeCalledWith(6);
  });
  it('handles dec click', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <NumberField {...props} onChange={onChange} />
      </ThemeProvider>
    );
    wrapper
      .find('[data-test="minusHandler"]')
      .last()
      .simulate('click');
    expect(onChange).toBeCalledWith(4);
  });
});

import React from 'react';
import {
  InputContainer,
  Quantity,
  InputWrapper,
  PlusNumberHandler,
  MinusNumberHandler,
  Icon,
  Unit
} from './styles'

const NumberField = ({ onChange, placeholder, unit, value } ) => {

  const handleClick = (interval) => (e) => {
    e.preventDefault();
    let v = value + interval >= 0 ? value + interval : value
    onChange(v)
  }
  return (
    <InputContainer>
      <InputWrapper>
        <MinusNumberHandler available={value > 0} onClick={handleClick(-1)} data-test="minusHandler">
          <Icon className="fa fa-minus" aria-hidden="true"></Icon>
        </MinusNumberHandler>
        <Quantity placeholder={placeholder}>{value}</Quantity>
        <PlusNumberHandler available onClick={handleClick(1)} data-test="plusHandler">
          <Icon className="fa fa-plus" aria-hidden="true"></Icon>
        </PlusNumberHandler>
      </InputWrapper>
      <Unit>{unit}</Unit>
    </InputContainer>
  )
}

NumberField.defaultProps = {
  placeholder: '',
  label: '',
  value: 0,
};

export default NumberField;
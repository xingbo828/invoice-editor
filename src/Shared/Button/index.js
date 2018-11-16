import React from 'react';
import { bool, node } from 'prop-types';
import { StyledButton } from './styles';

const Button = ({
  children,
  small,
  ghost,
  disabled,
  primary,
  danger,
  success,
  outline,
  fullWidth,
  squared,
  ...rest
}) => {

  return (
    <StyledButton
      small={small}
      primary={primary}
      danger={danger}
      success={success}
      disabled={disabled}
      ghost={ghost}
      outline={outline}
      fullWidth={fullWidth}
      squared={squared}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  squared: false
}

Button.propTypes = {
  disabled: bool,
  children: node,
  primary: bool,
  danger: bool,
  success: bool,
  small: bool,
  outline: bool,
  squared: bool,
  /**
   * make background transparent and invert text and border colors
   */
  ghost: bool
};

export default Button;
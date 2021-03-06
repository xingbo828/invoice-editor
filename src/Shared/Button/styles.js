import styled from 'styled-components';

const getBackgroundColor = props => {
  if (props.disabled) {
    return props.theme.colors.offWhite;
  } else if(props.primary) {
    return props.theme.colors.primary;
  } else if(props.inverted) {
    return 'white'
  } else if(props.danger) {
    return props.theme.colors.danger;
  } else if(props.success) {
    return props.theme.colors.success;
  }
  return props.theme.colors.secondary;
};

const getOutlineBorderColor = props => {
  if (props.disabled) {
    return props.theme.colors.border;
  } else if(props.primary) {
    return props.theme.colors.primaryLight;
  } else if(props.danger) {
    return props.theme.colors.danger;
  } else if(props.success) {
    return props.theme.colors.success;
  }
  return props.theme.colors.secondaryLight;
};


const getHoverColor = props => {
  if (props.outline) {
    return 'white';
  }

  return null;
}

const getHoverBackgroundColor = props => {

  if (props.outline) {

    if (props.primary) {
      return props.theme.colors.primaryLight
    }

    return props.theme.colors.secondaryLight
  }

  if (props.ghost) {
    return props.theme.colors.offWhite
  }

  if (props.disabled) {
    return '';
  }

  if (props.primary) {
    return props.theme.colors.primaryDark
  }

  if (props.inverted) {
    return props.theme.colors.offWhite
  }

  if (props.danger) {
    return  props.theme.colors.dangerLight;
  }

  return props.theme.colors.secondaryDark
}


const getPadding = props => {

  if (props.ghost) {

    if (props.small) {
      return `
        padding: 0.875rem 1.5rem;
        margin: 0 -1.5rem;
      `;
    }

    return `
      padding: 1rem 1.5rem;
      margin:  0 -1.5rem;
      ${props.theme.media.greaterThan('md')`
        padding: 1.5rem 2rem;
        margin: 0 -2rem;
      `.join('')}
    `
  }

  if (props.small) {
    return `
      padding: 0.675rem .8rem;
    `;
  }

  return `
    padding: 1rem 1.5rem;
    ${props.theme.media.greaterThan('md')`
      padding: 1.5rem 2rem;
    `.join('')}
  `
}

const getFontSize = props => {
  if (props.small) {
    return '.875rem';
  }
  return '1rem';
}




export const StyledButton = styled.button`
  border-radius: 99em;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  min-width: 80px;
  width: ${props=> props.fullWidth ? '100%' : 'auto'};
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  color: ${props=> props.ghost || props.outline || props.inverted ? getBackgroundColor(props) : 'white'};
  ${props=>props.inverted && `color: ${props.theme.colors.secondary};`}
  background-color:  ${props=> props.ghost || props.outline ? 'transparent' : getBackgroundColor(props)};
  font-size: ${getFontSize};
  outline: none;
  ${getPadding}
  ${props => props.squared && `
    border-radius: 4px;
  `}
  ${props => props.outline && `
    background: none;
    border-color: ${getOutlineBorderColor(props)};
  `}
  ${props => !props.disabled && !props.ghost && !props.outline && `
    box-shadow: ${props.theme.boxShadow.small};
  `}
  &:hover {
    background-color: ${getHoverBackgroundColor};
    border-color: ${getHoverBackgroundColor};
    color: ${getHoverColor};
    cursor: pointer;
  }
  &:active {
    transition: .1s;
    transform: scale(.96);
  }
`;
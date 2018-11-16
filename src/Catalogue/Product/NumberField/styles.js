import Styled from 'styled-components';

export const InputContainer = Styled.div`
  position: relative;
`;

export const InputWrapper = Styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const NumberHandler = Styled.div`
  display: inline-block;
  width: 50px;
  min-width: 50px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  text-align: center;
  color: ${props=>props.theme.colors.textLight};
  border: 1px solid ${props=>props.theme.colors.textLight};
  font-weight: 700;
  text-align: center;
  border-radius: 500px;
  &:hover {
    color: ${props=>props.theme.colors.primary};
  }
`;

export const PlusNumberHandler = Styled(NumberHandler)`
  right: 0;
`;

export const MinusNumberHandler = Styled(NumberHandler)`
  left: 0;
`;

export const Icon = Styled.i`
`;

export const Quantity = Styled.div`
  display: block;
  width: 100%;
  border-width: 1px;
  border-radius: 500px;
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  font-weight: 600;
  line-height: 50px;
  outline: none;
  text-align: center;
  &:focus + div{
    transform: scale(1);
  }
`;


export const InputLabel = Styled.label`
font-weight: bold;
font-size: 1rem;
`;


export const Unit = Styled.div`
  font-size: .875rem;
  font-weight: 600;
  margin-top: -6px;
  color: ${props=>props.theme.colors.textLight}
`
import styled from 'styled-components'

const Container = styled.div`
  padding: ${props=>props.theme.spaces.tight};
  margin: ${props=>props.theme.spaces.tight};
  ${props=>props.theme.media.greaterThan('sm')`
    padding: ${props.theme.spaces.base};
    margin: ${props.theme.spaces.base};
  `}
`;

export default Container
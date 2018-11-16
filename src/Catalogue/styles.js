import styled from 'styled-components'

export const ProductsContainer = styled.ul`
  margin: ${props=>props.theme.spaces.wide} 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  ${props=>props.theme.media.greaterThan('sm')`
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  `}
`
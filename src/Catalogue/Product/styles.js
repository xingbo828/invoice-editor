import Styled from 'styled-components'

export const Container = Styled.li`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  display: inline-block;
  padding: 2rem;
  box-shadow: ${props=>props.theme.boxShadow.large};
  border-radius: 4px;
  ${props=>props.theme.media.greaterThan('sm')`
    flex: 1 0 30%;
  `}
`
export const Title = Styled.div`
  padding: 0 0 1rem;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5;
  color: ${props=>props.theme.colors.textDark};
`

export const Price = Styled.div`
  padding: 0 0 1rem;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5;
  color: ${props=>props.theme.colors.textDark};
`

export const Image = Styled.div`
  margin: 0 auto 1.5rem;
  width: 100%;
  height: 100px;
  background: url('${props=>props.src}') center center no-repeat;
  background-size: contain;
`


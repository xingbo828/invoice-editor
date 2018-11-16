import styled from 'styled-components'

export const PriceSummaryOuterContainer = styled.div`
  font-size: 1.25rem;
  display: flex;
  flex-direction: row-reverse;
  max-width: 800px;
  margin: 0 auto;
`

export const PriceSummaryInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${props=>props.theme.media.greaterThan('sm')`
    width: 300px;
  `}
`

export const PriceSummaryLineItem = styled.div`
  display: flex;
  padding: .5rem 0;
  justify-content: space-between;
`
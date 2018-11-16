import styled from 'styled-components'

export const ProductSummaryList = styled.ul`
  padding: 0;
  margin: 2rem auto;
  max-width: 800px;
`

export const ProductSummaryListItem = styled.li`
  font-weight: ${props => props.theme.fontWeights.light};
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spaces.tight} 0;
  align-items: center;
  font-size: 1.25rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  > * {
    flex: 1;
  }
`

export const ProductSummaryListHeading = styled(ProductSummaryListItem)`
  font-weight: ${props => props.theme.fontWeights.medium};
`
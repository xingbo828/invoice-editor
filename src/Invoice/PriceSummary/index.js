import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'

import { getProductsTotal } from '../../cartReducer'


import PriceSummary from './PriceSummary'

const tax = 0.05

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

const mapStateToProps = (state) => ({
  subtotal: getProductsTotal(state)
});

const enhance = compose(
  connect(mapStateToProps),
  withProps(({ subtotal }) => ({
    tax: tax * subtotal,
    total: subtotal * (1 + tax),
    formatter
  }))
)


export default enhance(PriceSummary)
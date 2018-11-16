import { compose, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateProduct } from '../../cartAction'
import { getProducts } from '../../cartReducer'


import ProductSummary from './ProductSummary'

const mapDispatchToProps = dispatch => bindActionCreators({
  updateProduct
}, dispatch)

const mapStateToProps = (state) => ({
  products: getProducts(state)
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleRemove: props => (product) => e => {
      props.updateProduct({
        product,
        quantity: 0
      })
    }
  })
)


export default enhance(ProductSummary)
import { compose, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateProduct } from '../../cartAction'
import { getProductQuantity } from '../../cartReducer'

import Product from './Product'

const mapDispatchToProps = dispatch => bindActionCreators({
  updateProduct
}, dispatch)

const mapStateToProps = (state, ownProps) => ({
  quantity: getProductQuantity(ownProps.productDetail.id)(state)
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleChange: props => (v) => {
      props.updateProduct({
        product: props.productDetail,
        quantity: v
      })
    }
  })
)

export default enhance(Product)


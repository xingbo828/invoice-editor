import { compose, withHandlers } from 'recompose'
import { withRouter } from "react-router";

import Catalogue from './Catalogue'

const enhance = compose(
  withRouter,
  withHandlers({
    handleCheckout: props => e => {
      e.preventDefault();
      props.history.push({
        pathname: '/invoice'
      })
    }
  })
)

export default enhance(Catalogue)
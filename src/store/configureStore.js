import { createStore, compose } from 'redux'
import rootReducer from './rootReducer'

const middlewares = []

middlewares.push(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const enhancers = compose(...middlewares)

export default initialState =>
  createStore(rootReducer, initialState, enhancers)
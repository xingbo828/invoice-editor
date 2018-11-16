import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import configureStore from './store/configureStore'
import App from './App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
   </Provider>
, document.getElementById('root'))

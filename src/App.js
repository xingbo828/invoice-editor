import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Catalogue from './Catalogue';
import Invoice from './Invoice';
import GlobalStyle from './GlobalStyle';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <GlobalStyle />
          <Switch>
            <Route path="/catalogue" component={Catalogue} />
            <Route path="/invoice" component={Invoice} />
            <Redirect from="/" exact to="/catalogue" />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;

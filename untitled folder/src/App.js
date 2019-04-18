import React, { Component } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar/index.js';
import Dashboard from './scenes/Dashboard'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Navbar />
          <Switch>
              <Route exact path='/' component={Dashboard} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

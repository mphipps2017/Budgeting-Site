import React, { Component } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Navbar from './components/Navbar/index.js';
import Dashboard from './scenes/Dashboard';
import SignIn from './scenes/SignIn';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Navbar />
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/signin' component={SignIn} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

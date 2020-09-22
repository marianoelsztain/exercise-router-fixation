import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/strict-access">Strict Access</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;

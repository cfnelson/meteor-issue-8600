import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './App.less';

import SideNav from '../SideNav';
import Home from '../../pages/Home';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div className="App">
      <SideNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;

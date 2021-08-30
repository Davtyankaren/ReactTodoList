import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import MoreInfo from './MoreInfo';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/info/:id" component={MoreInfo} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Mentors from 'pages/Mentors';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Mentors />
        </Route>

        <Route path="/mentors">
          <Mentors />
        </Route>

        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

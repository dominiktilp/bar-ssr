import React from 'react';
import { Route } from 'react-router';
import App from '../views/App';
import NotFound from '../views/NotFound';
import Home from '../views/Home';

export default (

  <Route component={App}>

    <Route path="/" components={{ main: Home }} />
    <Route path="*" components={{ main: NotFound }} />

  </Route>

);

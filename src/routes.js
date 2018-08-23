/*
This is the top-level React component for our app.
It wires up the Redux store, which is passed in as a prop, to the react-redux provider.
It also maps routes (URLs) to components

<Provider> is a component from the react-redux package that basically binds the Redux store to React context.
This is how child components can get access to the store to use as their own props.

<Router> is the standard react-router package.  However, look at configureStore and reducers/index.js
to see the little bit of extra config needed to make these routes part of the redux state.

Below is a great tutorial for learning how to use react-router
https://github.com/reactjs/react-router-tutorial/tree/start/lessons

*/

import React, { PropTypes } from 'react';
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';

export function getRoutes() {
    return <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
    </Route>;
}


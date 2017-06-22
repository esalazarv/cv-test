/**
 * Created by eduardo on 22/06/17.
 */

/**
 * Dependencies
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';


/**
 * containers
 */
import App from './App';
import Home from './containers/home';
import Categories from './containers/categories';
import PageNotFound from './containers/PageNotFound';

const Routes  = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/categories" component={Categories}/>
            <Route component={PageNotFound}/>
        </Switch>
    </App>

export default Routes;

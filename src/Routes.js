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
import HomeContainer from './containers/home';
import MovieContainer from './containers/movie';
import CategoriesContainer from './containers/categories';
import PageNotFound from './containers/PageNotFound';

const Routes  = () =>
    <App>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/categories" component={CategoriesContainer}/>
            <Route exact path="/movie/:id" component={MovieContainer}/>
            <Route component={PageNotFound}/>
        </Switch>
    </App>

export default Routes;

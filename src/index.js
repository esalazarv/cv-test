/**
 * Dependencies
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Components
 */
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './RootReducer';

/**
 * Assets
 */
import './index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <Routes/>
        </Router>
    </Provider>,
    document.getElementById('app')
);

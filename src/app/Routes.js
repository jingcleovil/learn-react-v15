import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';

import browserHistory from './middleware/history';
import configureStore from './Stores';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import Layout from './Layout';

class Routes extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router history={ history }>
                    <Route path="/" component={ Layout }>
                        
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default Routes

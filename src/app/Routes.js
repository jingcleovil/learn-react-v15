import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import IndexRoute from 'react-router/lib/IndexRoute';
import configureStore from './Stores';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import App from './App';

class Routes extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router history={ history }>
                    <Route path="/(:page)" component={ Layout }>
                        
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default Routes

import path from 'path';
import Express from 'express';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';

import { renderToString } from 'react-dom/server'

import configureStore from './Stores';
import Layout from './Layout';

const app = Express()
const port = 3000;

app.use((req, res) => {
    const store = configureStore();

    const html = renderToString(
        <Provider store={store}>
            <Layout />
        </Provider>
    );

    const initialState = store.getState();

    const fullHtml = `
            <!doctype html>
            <html>
                <head>
                    <title>Redux Universal Example</title>
                </head>
                <body>
                    <div id="root">${html}</div>
                    <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
                    </script>
                    <script src="/static/bundle.js"></script>
                </body>
            </html>
            `
    res.send(fullHtml);
    
}).listen(port)

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './partials/Header';
import Footer from './partials/Footer';
import Nav from './partials/Nav';

const App = ({ children }) => (
    <div>
        <Nav/>
        <Header/>
        <div className="container">
            { children }
        </div>
    </div>
)


export default App

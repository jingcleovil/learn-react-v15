import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './partials/Header';
import Footer from './partials/Footer';
import Nav from './partials/Nav';

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default App

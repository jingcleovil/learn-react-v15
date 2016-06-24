import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './partials/Header';
import Footer from './partials/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default App

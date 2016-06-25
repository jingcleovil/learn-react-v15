import React, { Component } from 'react';
import Link from 'react-router/lib/Link';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand">
                            Learn React 15
                        </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <a to="/">Home</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav

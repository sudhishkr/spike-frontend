import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Team from './Team';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Team />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Team />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;

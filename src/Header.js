import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header class="masthead">
                <div class="container">
                    <div class="intro-text">
                        <div class="intro-heading text-uppercase">Welcome To FoodSpy!</div>
                        <div class="intro-lead-in">our mission is to keep you <b><u>safe</u></b> from <b><u>bad food</u></b></div>
                        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">REPORT NOW</a>
                        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">GET ALERTS</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
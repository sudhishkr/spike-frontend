import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  styles = {
    fontFamily: "Century Gothic",
    color: "white"
  };
  navigation = {
    top: 0,
    zindex: 100
  };
  render() {
    return (
      //   <StickyContainer style={{ height: 1000 }}>
      //     <Sticky topOffset={-40} stickyStyle={{ marginTop: 40 }}>
      //
      //       <header className="sticky-header">
      //         <h3>This Header is Sticky because of React-Sticky</h3>
      //       </header>
      <Router>
        <Navbar
          class="navigation"
          color="blue"
          dark
          expand="md"
          fixed="top"
          scrolling
        >
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink
                  style={{
                    marginTop: 15,
                    fontFamily: "Century Gothic",
                    color: "white"
                  }}
                  to="#"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    marginTop: 15,
                    fontFamily: "Century Gothic",
                    color: "white"
                  }}
                  to="#"
                >
                  Recent Reports
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    marginTop: 15,
                    fontFamily: "Century Gothic",
                    color: "white"
                  }}
                  to="#"
                >
                  How It Works
                </NavLink>
              </NavItem>

              <NavbarBrand href="/">
                <a
                  style={{
                    fontFamily: "Curlz MT",
                    fontSize: 40,
                    color: "white",
                    marginLeft: 300
                  }}
                >
                  FoodSpy
                </a>
              </NavbarBrand>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <ul class="navbar-nav nav-flex-icons">
                  <li class="nav-item">
                    <a
                      href="https://www.facebook.com/BadFoodNews/"
                      class="nav-link"
                      target="_blank"
                    >
                      <i class="fa fa-facebook" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://twitter.com/hashtag/foodpoisoning"
                      class="nav-link"
                      target="_blank"
                    >
                      <i class="fa fa-twitter" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.instagram.com/explore/tags/foodpoisoning/"
                      class="nav-link"
                      target="_blank"
                    >
                      <i class="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
      //     </Sticky>
      //   </StickyContainer>
    );
  }
}

export default NavbarFeatures;

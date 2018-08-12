import React, {Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {NavLink, Route, Switch } from "react-router-dom";

class Navigation extends Component {

    state = {
        collapsed: true
    }

    toggleNavbar = ()=> {
        this.setState({
            collapsed: !this.state.collapsed
          });
    }
     
    render() {
        let renderer = (
            <div >
            <div>
                    <Navbar color="faded" style={{backgroundColor : "#212121"}} dark fixed>
                    <NavbarBrand href="/" className="mr-auto">VideoApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink to="/">SIGNIN</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">SIGNUP</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
      </div>
            </div>
        )
        return renderer; 
    }
} 

export default Navigation;
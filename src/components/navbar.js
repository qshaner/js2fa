import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Navbar, NavbarBrand } from 'reactstrap';

class NavBar extends Component {


  state = {
  
  };

render(){
    return (
        <div>
            <Navbar className="nav">
                <NavbarBrand href="/">Login</NavbarBrand>
            </Navbar>
        </div>
    )
}

}

export default withRouter(NavBar);

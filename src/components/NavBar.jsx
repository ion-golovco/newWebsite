import React, { Component } from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <Container>
                <Navbar dark expand="md" class="navbar">
                    <img src="https://i.imgur.com/nDhRYnX.png" alt="" width="35" />
                    <NavbarBrand href="https://github.com/ion-golovco" style={{
                        "margin-left":"15px"}}>GOLOVCO ION</NavbarBrand>
                </Navbar>
            </Container>
        );
    }
}

export default NavBar;

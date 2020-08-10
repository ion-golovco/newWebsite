import React, { Component } from "react";
import {
    Navbar,
    NavbarBrand,
    Container,
} from "reactstrap";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <Container>
                <Navbar dark expand="md" class="navbar">
                    <NavbarBrand href="https://github.com/ion-golovco">GOLOVCO ION</NavbarBrand>
                </Navbar>
            </Container>
        );
    }
}

export default NavBar;

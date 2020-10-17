import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Hello extends Component {
    state = {};
    render() {
        return (
            <Jumbotron id="jumbotron">
                <h1 class="mainText">
                    Hello!
                </h1>
                <hr class="light" />
                I am Golovco Ion, Space enthusiast / JS developer / Game lover
               
            </Jumbotron>
        );
    }
}

export default Hello;


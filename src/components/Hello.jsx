import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

class Hello extends Component {
    render() {
        return (
            <Jumbotron id="jumbotron">
                <Row>
                    <Col>
                        <Container id="mainText">Hello</Container>
                        <hr class="light" />
                        I am Golovco Ion, Space enthusiast / JS developer / Game lover
                        <hr class="light" /> V V V
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Hello;

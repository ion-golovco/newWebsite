import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col } from "reactstrap";

import NavBar from "./components/NavBar";
import Hello from "./components/Hello";
import Projects from "./components/Projects"

import sketch from "./animatedBackground";

function App() {
    return (
        <div>
            <NavBar />
            <Container>
                <Hello />
                <Container>
                    <Row>
                        <Col xs="0" md="5"></Col>
                        <Col xs="12" md="7"></Col>
                    </Row>

                </Container>
                <Projects />
            </Container>

            <sketch />

            <Jumbotron id="footer">
                GOLOVCO ION <sub>2020</sub>
            </Jumbotron>
        </div>
    );
}

export default App;

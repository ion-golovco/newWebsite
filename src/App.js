import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron, Row, Col, NavLink } from "reactstrap";

import NavBar from "./components/NavBar";
import Hello from "./components/Hello";
import ImageSlide from "./components/ImageSlide";
import FavoriteProjects from "./components/FavoriteProjects";

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
                        <Col xs="12" md="7">
                            <Jumbotron id="pillText">
                                <h1 id="textBreak">
                                    <b>FAVORITE PROJECTS</b>
                                </h1>
                            </Jumbotron>
                            <FavoriteProjects id="favorite"/>
                            <Jumbotron id="pillText">
                                <h1 id="textBreak">
                                    <b>UPCOMING</b>
                                </h1>
                            </Jumbotron>
                            <ImageSlide />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <sketch />
            <Jumbotron id="footer">
                GOLOVCO ION <sub>2020</sub>
            </Jumbotron>
        </div>
    );
}

export default App;

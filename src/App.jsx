import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "reactstrap";

import NavBar from "./components/NavBar";
import Hello from "./components/Hello";
import Projects from "./components/Projects";

import sketch from "./animatedBackground";

function App() {
    return (
        <div id="body1">
            <NavBar/>
            <Container>
                <Hello/>
                <Projects/>
            </Container>
            <sketch/>
            <Jumbotron id="footer">
                GOLOVCO ION <sub>2020</sub>
            </Jumbotron>
        </div>
    );
}

export default App;

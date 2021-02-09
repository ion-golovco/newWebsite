import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "reactstrap";

import NavBar from "./components/NavBar";
import Hello from "./components/Hello";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

import sketch from "./animatedBackground";

function App() {
    var d = new Date();
    const n = d.getFullYear();
    return (
        <div id="body1">
            <sketch />
            <NavBar />
            <Container>
                <Hello />
                <Projects />
                <AboutMe />
                <Container>2020 was a weird year</Container>
            </Container>
            <Jumbotron id="footer">
                GOLOVCOION<sup>{n}</sup>
            </Jumbotron>
        </div>
    );
}

export default App;

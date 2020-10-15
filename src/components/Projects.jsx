import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import items from "../assets/items";

const projects = items;

class Project extends Component {
    createTile(p) {
        let postImage = p.image ? (
            <img id="image" src={p.image} alt={p.title} width="100%" />
        ) : null;
        return (
            <Container id="project">
                <Row>
                    <Col md="12">
                        <Row>
                            <Container id="post">
                                <div>{postImage}</div>
                                <div id="textBreak">{p.title}</div>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
    render() {
        return <div>{projects.map((a) => this.createTile(a))}</div>;
    }
}

export default Project;

import React, { Component } from "react";
import { Col, Container, Row, Collapse, Card, CardBody } from "reactstrap";
import items from "../assets/items"

const projects = items;

class Project extends Component {
    state = {
        tabOpen: -1,
    };
    createTile(p) {
        let postImage = p.image ? <img id="image" src={p.image} alt={p.title} /> : <Container id ="posttut"></Container>;
        return (
            <Container id="project">
                <Row>
                    <Col md="12">
                        <Row>
                            <Container
                                id="post"
                                onClick={() => {
                                    this.setState({ tabOpen: p.id });
                                }}
                            >
                                <div id={"c4post"}>
                                    <div>{postImage}</div>
                                    <div id="textBreak">{p.title}</div>
                                </div>
                                <Collapse id="description" isOpen={this.state.tabOpen === p.id}>
                                    <Card id="card">
                                        <CardBody>{p.desc}</CardBody>
                                    </Card>
                                </Collapse>
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

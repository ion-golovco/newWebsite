import React, { Component } from "react";
import { Col, Container, Row, Collapse, Card, CardBody } from "reactstrap";
import items from "../assets/items";

const projects = items;

class Project extends Component {
    state = {
        tabOpen: -1,
    };
    createTile(p) {
        let postImage = p.image ? (
            <img id="image" src={p.image} alt={p.title} />
        ) : (
            <Container id="posttut"></Container>
        );
        return (
            <Container id="project">
                <Row>
                    <Col md="12">
                        <Row fluid={true}>
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
                                    <Card id="card" md="12">
                                        <CardBody>
                                            {p.desc}
                                            <hr class="light" />
                                            {p.date}
                                        </CardBody>
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
        return <Container fluid={true}><h6>{"<Scroll Down>"}</h6>{projects.map((a) => this.createTile(a))}</Container>;
    }
}
export default Project;

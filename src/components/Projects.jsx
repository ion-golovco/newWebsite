import React, { Component } from "react";
import { Col, Container, Row, Collapse } from "reactstrap";
import items from "../assets/items";

const projects = items;

class Project extends Component {
    state = {
        tabOpen: -1,
    };
    toggle = () => {
        this.setState({
            tabOpen: 3, //idk?
        });
    };
    createTile(p) {
        let postImage = p.image ? (
            <img id="image" src={p.image} alt={p.title} />
        ) : null;
        return (
            <Container id="project">
                <Row>
                    <Col md="12">
                        <Row>
                            <Container id="post" onClick={this.toggle}>
                                <div>{postImage}</div>
                                <div id="textBreak">{p.title}</div>
                                <Collapse isOpen={this.state.tabOpen === p.id}>{p.desc}</Collapse>
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

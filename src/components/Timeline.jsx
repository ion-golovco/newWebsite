import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const projects = [{ date: 1 }, {}, {}];
const posts = [{}, {}, {}];
class Timeline extends Component {
    state = {
        date: new Date(),
    };
    createProject = (a) => {
        

    };
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="0" md="7">
                        {}
                    </Col>
                    <Col xs="12" md="5">
                        {}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Timeline;

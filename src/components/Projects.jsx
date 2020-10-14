import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import items from "../assets/items";

const projects = items;

class Project extends Component {
  createTile(p) {
    let postImage = p.image ? (
      <a href={p.link}>
        <img src={p.image} alt={p.title} width="100%" />
      </a>
    ) : null;
    return (
      <Container id="project">
        <Row>
          <Col md="12">
            <Row><div>{postImage}</div></Row>
            <Row><Container id="textBreak">{p.title}</Container></Row>
            <Row><Container id="description">{p.desc}</Container></Row>
            <Row><Container>{p.date}</Container></Row>
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

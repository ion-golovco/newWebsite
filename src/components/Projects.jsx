import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import items from "../assets/items";

const projects = items;

class Project extends Component {
  createTile(p) {
    let postImage = p.image ? <a href={p.link}><img src={p.image} alt={p.title} width="200" /></a>: null;
    return (
      <Container>
        <Row>
          <Col>
            <Row>{postImage}</Row>
            <Row>{p.title}</Row>
            <Row>
              <Col>{p.desc}</Col>
              <Col>{p.date}</Col>
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

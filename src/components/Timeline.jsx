import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Col, Container, Row } from "reactstrap";

const projects = [
    {
        desc: "The shadow of the chaos game, provably discovered by me :) ",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/index/chaos/",
        image: "https://i.imgur.com/8Bc4M9H.png",
        title: "Chaos game",
        date: 1,
    },
    {
        desc: "The shadow of the chaos game, provably discovered by me :) ",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/index/chaos/",
        image: "https://i.imgur.com/8Bc4M9H.png",
        title: "Chaos game",
        date: 2,
    },
    {
        desc: "The shadow of the chaos game, provably discovered by me :) ",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/index/chaos/",
        image: "https://i.imgur.com/8Bc4M9H.png",
        title: "Chaos game",
        date: 3,
    },
];
const posts = [
    { title: "Chaos game", date: 3 },
    { title: "Chaos game", date: 3 },
    { title: "Chaos game", date: 3 },
];
class Timeline extends Component {
    state = {
        date: new Date(),
    };
    createProjectMiddle = (p, i) => {
        let first = i == 0 ? 1 : 0;
        return (
            <Container>
                <Row>
                    <Col md="6">{p.desc}</Col>
                    <Col md="6">
                        <img src={p.image} alt={p.title} width="200px"></img>
                    </Col>
                </Row>
            </Container>
        );
    };
    createProjectAndPostRight = (p) => {
        return <Container></Container>;
    };

    render() {
        const mobile = isMobile ? ( "" ) : (
            <Col xs="0" md="6" style={{ background: "red" }}>
                {projects.map((p) => this.createProjectMiddle(p, 1))}
            </Col>
        );
        return (
            <Container>
                <Row>
                    <Col xs="0" md="3"></Col>
                    {mobile}

                    <Col xs="12" md="3" style={{ background: "green" }}>
                        {projects.map((p) => this.createProjectAndPostRight(p, 1))}
                        aaaaaa
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Timeline;

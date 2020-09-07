import React, { Component } from "react";
import { Card, CardBody, CardText, Container, CardImg, Row, Col, CardLink } from "reactstrap";
import { isMobile } from "react-device-detect";

const items = [
    {
        desc: "Lost fear - a short side scroller made in JS Canvas Coming Soon",
        link: "",
        image: "https://i.imgur.com/CzRzOib.png",
        mobiledesc: "Lost fear - a short side scroller",
    },
    {
        desc: "The shadow of the chaos game, provably discovered by me :) ",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/index/chaos/",
        image: "https://i.imgur.com/8Bc4M9H.png",
        mobiledesc: "Chaos game",
    },
    {
        desc: "A solar system with hitboxes for the moons and planets",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/p5articles/p5solarsystem",
        image: "https://i.imgur.com/yRRFDob.png",
        mobiledesc: "Solar System",
    },
    {
        desc: "Fractals are really cool",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/p5articles/p5jsfractals",
        image: "https://i.imgur.com/vfNBJiS.png",
        mobiledesc: "Fractals are really cool",
    },
];

class FavoriteProjects extends Component {
    state = {};
    render() {
        return (
            <Container>
                <Row>{items.map((n) => this.createSlide(n))}</Row>
            </Container>
        );
    }
    createSlide = (a) => {
        let link =
            a.link !== "" ? (
                <CardLink id="cardlink" href={a.link}>
                    {isMobile ? a.mobiledesc : a.desc}
                </CardLink>
            ) : (
                <CardText>{isMobile ? a.mobiledesc : a.desc}</CardText>
            );

        return (
            <Col xs="6">
                <Card>
                    <CardImg src={a.image} alt="Card image cap" />
                    <CardBody>{link}</CardBody>
                </Card>
            </Col>
        );
    };
}

export default FavoriteProjects;

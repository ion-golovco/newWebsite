import React, { Component } from "react";
import { Col, Jumbotron, Row } from "reactstrap";
class AboutMe extends Component {
    state = {};
    render() {
        return (
            <Jumbotron id="jumbotron1">
                <h2 >About me</h2>
                <Row >
                    <Col md="4">
                        <img
                            src="https://i.imgur.com/yNuDmZC.png"
                            alt="me!"
                            width="100%"
                            style={{"border-radius":"1000px","border":"7px solid #fc6666"}}
                        ></img>
                    </Col>
                    <Col md="8" style={{"margin-top":"1.5rem"}}>
                  
                        <hr class="pink"/>
                        I am a small JS developer that started programing a few years ago. Its been
                        quite a fun ride till now and it's looking to be even better. I created a
                        few small games and lots of small projects in JavaScript. Currently I am
                        looking to expand my horizons, so to say, as a developer by learning new
                        languages and methods of improving my code!
                        <hr class="pink"/>
                    </Col>
                </Row>

            </Jumbotron>
        );
    }
}

export default AboutMe;

import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
class AboutMe extends Component {
    state = {};
    render() {
        return <Jumbotron id="jumbotron">
            I am a small JS developer that started programing a few years ago. Its been quite a fun
            ride till now and it's looking to be even better. I created a few small games and lots
            of small projects in JavaScript. Currently I am looking to expand my horizons, so to
            say, as a developer by learning new languages and methods of improving my code!
        </Jumbotron>;
    }
}

export default AboutMe;

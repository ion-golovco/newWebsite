import React, { Component } from "react";
import { Jumbotron} from "reactstrap";

class Hello extends Component {
    state = {};
    render() {
        return (
            <Jumbotron id="jumbotron">
                <h1 className="display-3" class="mainText"><b>Hello!</b></h1>
                <p className="lead">
                    I am Golovco Ion, Space enthusiast / JS developer / Game lover
                    <hr class = 'light'/>I am a small JS developer that started programing a few years ago. Its
                    been quite a fun ride till now and it's looking to be even better. I created a
                    few small games and lots of small projects in JavaScript. Currently I am looking
                    to expand my horizons, so to say, as a developer by learning new languages and
                    methods of improving my code!
                </p>
            </Jumbotron>
        );
    }
}

export default Hello;

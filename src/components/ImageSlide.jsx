import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
    {
        key: Math.round(Math.random() * 100000),
        src: "https://i.imgur.com/hDrbeoY.png",
        caption: "They look cool so I thought I might as well.",
        header: (<p style = {{color:"rgb(20,20,20)"}}>WebGL Shaders !</p>),
    },
    {
        key: Math.round(Math.random() * 100000),
        src: "https://i.imgur.com/Eymbe6S.png",
        caption: "A game made from my previous experience of making games.",
        header: (<p style = {{color:"rgb(20,20,20)"}}>A 3D Game in Unity</p>),
    },
];
class ImageSlide extends Component {
    state = {};
    render() {
        return <UncontrolledCarousel  items={items} key={items.key} />;
    }
}

export default ImageSlide;

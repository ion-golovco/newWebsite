import React from "react";
import {Row, Col } from "reactstrap";

const items = [
    {
        id: 1,
        title: "Lost fear",
        image: "https://i.imgur.com/CzRzOib.png",
        link: "",
        date: "2018 - 2020 in proggress",
        desc: (
            <Row>
                <p>
                    <hr class="light" />
                    Lost Fear is a pretty ambitious project for me as a developer. I started 2 years
                    ago but still haven't gone around to finish it. I feel like I have to finish it
                    at least since a lot of my other small games are well, unfinished. I think that
                    until the year 2021 I should have enough time complete most of it, maybe even
                    get some feedback on it!
                    <hr class="light" />
                </p>
                <p>
                    As ambitious as it is, it is not imposible as more than 80% of the work is complete. But
                    you know how they say, the last leap is the hardest one! It is a hard chalenge
                    that I took maybe foolishly but, it was a great lesson about knowing my limits
                    and overcoming them. The code at the start is rather messy and is innefecient
                    but, I know that now and I'm going to do better next time!
                </p>
            </Row>
        ),
    },
    {
        id: 2,
        title: "My new logo",
        date: "27 september 2020",
        desc: (
            <Row>
                <Row>
                    <Col md="3">
                        <img src="https://i.imgur.com/nDhRYnX.png" width="100px" alt="logo" />
                    </Col>
                    <Col md="9">
                        <p>
                            <hr class="light" />
                            So my new logo is really nice and all but that is not the only reason I
                            like it so much. It's rather profound as it resembles two greek letters
                            that I am a very big fan of! The letters in question are: Ψψ (psi) and
                            Φφ (phi).
                        </p>{" "}
                        <hr class="light" />
                    </Col>
                </Row>
                <p>
                    Ψ is rather peculiar as in its hard to describe what is used for but like for
                    anything in life it can pe explained in 2 words: quantum physics. Then we have Φ
                    which is quite the popular guy being the literal golden ratio that nature abides
                    to. Fun fact: All the spirals that we see in nature are most likely not the
                    golden ratio! Why? Because nature isn't perfect! Those spirals are called
                    metalic ratios. It is a really interesting topic actually!
                    <hr class="light" />
                </p>
                <p>
                    The colors are a bit harder to describe tho. I just like this bitter sweet coral
                    color! And white just works well with any color.
                </p>
            </Row>
        ),
    },
    {
        id: 3,
        title: "Chaos game shadows",
        image: "https://i.imgur.com/8Bc4M9H.png",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/index/chaos/",
        date: "10 october 2019",
        desc: <Row>
            <Row>
                
            </Row>
        </Row>,
    },
    {
        id: 4,
        title: "Solar System, v1?",
        image: "https://i.imgur.com/yRRFDob.png",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/p5articles/p5solarsystem",
        date: "6 october 2019",
        desc: "A solar system with hitboxes for the moons and planets",
    },
    {
        id: 5,
        title: "L-System fractals",
        image: "https://i.imgur.com/vfNBJiS.png",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/p5articles/p5jsfractals",
        date: "7 september 2019",
        desc: "Fractals are really cool",
    },
    {
        id: 6,
        title: "Landers",
        image: "https://i.imgur.com/vfNBJiS.png",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/project2/",
        date: "26 july 2019",
        desc: "a really bad rts :)",
    },
    {
        id: 7,
        title: "RGB Background",
        image: "https://i.imgur.com/vfNBJiS.png",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/project2/",
        date: "2 may 2019",
        desc: "a really bad rts :)",
    },
    {
        id: 8,
        title: "My first website!",
        image: "https://i.imgur.com/vfNBJiS.png",
        link: "https://hereyougo.netlify.app/p5jslibraryandcode/project2/",
        date: "9 march 2019",
        desc: "a really bad rts :)",
    }


];

export default items;

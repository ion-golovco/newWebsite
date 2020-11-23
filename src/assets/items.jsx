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
          Lost Fear is a pretty ambitious project for me as a developer. I
          started 2 years ago but still haven't gone around to finish it. I feel
          like I have to finish it at least since a lot of my other small games
          are well, unfinished. I think that until the year 2021 I should have
          enough time complete most of it, maybe even get some feedback on it!
        </p>
        <p>
          As ambitious as it is, it is not imposible as more than 80% of the
          work is complete. But you know how they say, the last leap is the
          hardest one! It is a hard chalenge that I took maybe foolishly but, it
          was a great lesson about knowing my limits and overcoming them. The
          code at the start is rather messy and is innefecient but, I know that
          now and I'm going to do better next time!
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
            <img
              src="https://i.imgur.com/nDhRYnX.png"
              width="100px"
              alt="logo"
            />
          </Col>
          <Col md="9">
            <p>
              So my new logo is really nice and all but that is not the only
              reason I like it so much. It's rather profound as it resembles two
              greek letters that I am a very big fan of! The letters in question
              are: Ψψ (psi) and Φφ (phi).
            </p>
          </Col>
        </Row>
        <p>
          Ψ is rather peculiar as in its hard to describe what is used for but
          like for anything in life it can pe explained in 2 words: quantum
          physics. Then we have Φ which is quite the popular guy being the
          literal golden ratio that nature abides to. Fun fact: All the spirals
          that we see in nature are most likely not the golden ratio! Why?
          Because nature isn't perfect! Those spirals are called metalic ratios.
          It is a really interesting topic actually!
        </p>
        <p>
          The colors are a bit harder to describe tho. I just like this bitter
          sweet coral color! And white just works well with any color.
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
    desc: (
      <Row>
        <Col>
          <p>
            Chaos game shadows is something I was not expecting to find. I think
            I was the first to discover such a strange phenomena. It is an
            extension to the "Chaos Game". Here is a video explaining this
            small, intriguing game.
          </p>
          
          <iframe id="video"width="100%" height="450px" src="https://www.youtube.com/embed/kbKtFN71Lfs" frameborder="0" allowfullscreen></iframe>
          <p>
            After playing around on it for maybe a bit too much, I was really
            interested in what this game is capable of. So I started changing
            all the different varaibles and made notes along the way. Eventually
            I got to a weird patern which is not usual for this game. So I asked
            myself, "Am I looking at this properly or is something more
            hiding?". Then I realised I haven't changed the zoom level yet. Then
            it happened. The Shadows of the Chaos game were born. It was
            spectacular, being the first to see such interesting fractals being
            formed. I did research more online but found nothing about them.
            There is a demo down here if you want to try it out?
          </p>
          <iframe src="#" frameborder="0" width="100%" height="500px" title="I"></iframe>
        </Col>
      </Row>
    ),
  },
  {
    id: 5,
    title: "L-System fractals",
    image: "https://i.imgur.com/vfNBJiS.png",
    link:
      "https://hereyougo.netlify.app/p5jslibraryandcode/p5articles/p5jsfractals",
    date: "7 september 2019",
    desc: (
      <Row>
        <Col>
          If you could not tell until now i really like fractals. They are just
          fascinating. Now L-system fractals are the easiest and fastest way to
          get some nice looking fractals whithout much effort. So of course i
          tried a lot o different of types of L-systems. You can try them out in
          the demo down bellow.
        </Col>
      </Row>
    ),
  },
  {
    id: 6,
    title: "Landers",
    image: "https://i.imgur.com/vfNBJiS.png",
    link: "https://hereyougo.netlify.app/p5jslibraryandcode/project2/",
    date: "26 july 2019",
    desc: (
      <Row>
        <Col>
          My second real try at a game. It is a bad game and it works like crap.
          But I learnt so much about terrain generation and about game
          development from it that I consider it a succes. It made me realize
          that making game is one of my favorite hobbys and that i will try to
          make more games in the future! There is a demo for it but it's hard to
          play and doesn't give you any hints in playing the game.
        </Col>
      </Row>
    ),
  },
  {
    id: 8,
    title: "My first website!",
    image: "https://i.imgur.com/vfNBJiS.png",
    link: "https://hereyougo.netlify.app/p5jslibraryandcode/project2/",
    date: "9 march 2019",
    desc: (
      <Row>
        <Col>This is where my Web development journey began.</Col>
      </Row>
    ),
  },
];

export default items;

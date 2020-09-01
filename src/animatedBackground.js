import p5 from "p5";
import { isMobile } from "react-device-detect";

let w, h;
let arrPart = [];
let arrSines = [];
let arrRockPart = [];
let dx,
    period = 5000;
let sines = 36;
let amp = 50;
let hh;

let rocket, rocketB;

const s = (p) => {
    w = p.windowWidth;
    h = p.windowHeight * 3;

    let color = {
        c1: p.color(4, 12, 68),
        c2: p.color(55, 52, 114),
        c3: p.color(133, 94, 178),
        c4: p.color(142, 146, 191),
        c5: p.color(300, 300, 300),
    };
    let firecolor = [
        [255, 0, 0],
        [255, 90, 0],
        [255, 154, 0],
        [255, 206, 0],
        [255, 232, 8],
    ];
    p.setup = function () {
        hh = h / 3;
        dx = (p.TWO_PI / period) * 20;
        let cnv = p.createCanvas(w, h);
        cnv.position(0, 0, "absolute");
        cnv.style("z-index: -100");

        for (let i = 0; i < 400; i++) {
            arrPart.push(new particle());
        }
        for (let i = 0; i < 300; i++) {
            arrRockPart.push(new rocketParticle());
        }
        for (let i = -10; i < sines + 10; i++) {
            arrSines.push(new sineWaveRect((w / sines) * i));
        }
        rocketB = new Rocket();
        rocket = p.loadImage("https://i.imgur.com/3uiw387.png");
    };
    p.draw = function () {
        p.noStroke();
        p.fill(22);
        p.rect(0, 0, w, hh);
        p.fill(color.c1);
        p.rect(0, hh, w, h);

        setGradient(0, hh + hh / 3, w, hh / 2, color.c1, color.c2);
        setGradient(0, hh + hh / 2 + hh / 3, w, hh / 2, color.c2, color.c3);
        setGradient(0, 2 * hh + hh / 3, w, hh / 2, color.c3, color.c4);
        setGradient(0, 2 * hh + hh / 3 + hh / 2, w, hh / 1.5, color.c4, color.c5);

        for (let i of arrSines) {
            i.update();
            p.fill(22);
            p.rect(i.pos.x, i.pos.y + h / 3 - 100, w / sines + 1, 200, 20);
        }
        if (!isMobile) {
            for (let i of arrPart) {
                let a = hh * 2.5 - i.pos.y;
                if (a > 0) {
                    p.fill(222, a);
                    i.update();
                    p.circle(i.pos.x, i.pos.y, i.size);
                }
            }
            for (let i of arrRockPart) {
                i.update();
                if (rocketB.pos.y + 100 < i.pos.y) {
                    p.fill(i.color[0]);
                    p.circle(i.pos.x, i.pos.y, i.size);
                }
            }

            p.push();

            p.translate(rocketB.pos.x, rocketB.pos.y);
            p.rotate((p.PI / 180) * rocketB.angle);
            p.imageMode(p.CENTER);
            rocket.resize(100, 350);
            p.image(rocket, 0, 0);

            p.pop();
            if (p.mouseY > hh / 3.5 && p.mouseY < h - hh / 8) {
                rocketB.nextPosy = p.mouseY;
            }
            rocketB.update();
        }
    };
    function setGradient(x, y, w, h, c1, c2) {
        p.noFill();
        for (let i = y; i <= y + h; i++) {
            let inter = p.map(i, y, y + h, 0, 1);
            let c = p.lerpColor(c1, c2, inter);
            p.stroke(c, 255);
            p.rect(x, i, w, 1);
        }
        p.noStroke();
    }

    class rocketParticle {
        constructor() {
            this.pos = { x: 0, y: p.random(h) };
            this.vel = { x: p.random(-0.7, 0.7), y: p.random() };
            this.size = 0;
            this.color = this.pos.y > h - hh / 2 ? [255] : [p.random(firecolor)];
            this.timer = p.random(190);
        }
        update() {
            if (!this.pos.x) {
                this.pos.x = (Math.cos(1) * Math.sqrt(this.pos.y) * -w) / 33 + w * 0.9;
            }
            this.timer++;
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
            this.size = (200 - this.timer) / ((this.pos.y - rocketB.pos.y) / 10);
            if (this.pos.y > h - hh / 2) {
                this.size = ((200 - this.timer) / ((this.pos.y - rocketB.pos.y) / 10)) * 4;
            }
            if (this.timer > 200) {
                this.reset();
            }
        }
        reset() {
            this.pos = { x: 0, y: h - (p.random() * h - rocketB.pos.y) };
            this.vel = { x: p.random(-0.7, 0.7), y: p.random() };
            this.size = 0;
            this.color = this.pos.y > h - hh / 2 ? [p.random(255, 22)] : [p.random(firecolor)];
            this.timer = 0;
        }
    }
};
class Rocket {
    constructor() {
        this.pos = { x: 100, y: 250 };
        this.vely = 0;
        this.nextPosy = 250;
        this.angle = 0;
    }
    update() {
        this.pos.y += this.vely;
        this.vely = -((this.pos.y - this.nextPosy) / 50);
        this.angle = 45 - (this.pos.y / h) * 48;

        this.pos.x = (Math.cos(1) * Math.sqrt(this.pos.y) * -w) / 33 + w * 0.9;
    }
}
class particle {
    constructor() {
        this.pos = { x: Math.random() * w, y: Math.random() * h };
        this.velx = -Math.random();
        this.size = Math.random() * 3;
    }
    update() {
        this.pos.x += this.velx;
        if (this.pos.x < -10) {
            killParticle(this);
        }
    }
}
function killParticle(i) {
    for (let j in arrPart) {
        if (arrPart[j] === i) {
            arrPart.splice(i, 1);
            break;
        }
    }
    arrPart.push(new particle());
}

class sineWaveRect {
    constructor(x) {
        this.pos = { x: x, y: 0 };
        this.color = 100;
    }
    update() {
        this.pos.y = Math.sin(this.pos.x) * amp;
        this.pos.x += dx;
    }
}

let myp5 = new p5(s);
export default myp5;

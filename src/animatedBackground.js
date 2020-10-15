import p5 from "p5";
import { isMobile } from "react-device-detect";

let w, h;
let arrPart = [];
let arrSines = [];
let dx,
    period = isMobile ? 3000 : 5000;
let sines = isMobile ? 16 : 36;
let amp = isMobile ? 25 : 50;
let hh;

const s = (p) => {
    w = isMobile ? p.displayWidth : p.displayWidth - 17;
    h = p.displayHeight * 3;

    p.setup = function () {
        hh = h / 3;
        dx = (6 / period) * 20;
        let cnv = p.createCanvas(w, h);
        cnv.position(0, 0, "absolute");
        cnv.style("z-index: -100");

        for (let i = 0; i < 400; i++) {
            arrPart.push(new particle());
        }

        for (let i = -1; i < sines; i++) {
            arrSines.push(new sineWaveRect((w / sines) * i, i));
        }
    };
    p.draw = function () {
        p.noStroke();
        p.fill(20, 15, 80);
        p.rect(0, 0, w, h);
        p.fill(22);
        p.rect(0, 0, w, hh - 50);

        for (let i of arrSines) {
            i.update();

            p.fill(22);

            p.rect((i.pos.n * w) / sines + 1, i.pos.y + h / 3 - 150, w / sines + 1, 200, 20);
        }
        p.noStroke();
        if (!isMobile) {
            for (let i of arrPart) {
                p.fill(255);
                i.update();
                p.circle(i.pos.x, i.pos.y, i.size);
            }
        }
    };
};

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
    constructor(x, n) {
        this.pos = { x: x, y: 0, n: n };
        this.color = 100;
    }
    update() {
        this.pos.y = Math.sin(this.pos.x) * amp;
        this.pos.x += dx;
    }
}

let myp5 = new p5(s);
export default myp5;

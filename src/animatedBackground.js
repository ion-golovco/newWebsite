import p5 from "p5";
import { isMobile } from "react-device-detect";

let w, h;
let arrPart = [];
let arrSines = [];
let dx,
    period = 15000;
let sines = 36;
let amp = 50;
let hh;

const s = (p) => {
    w = isMobile ? 0 : p.displayWidth - 17;
    h = isMobile ? 0 : p.displayHeight * 4;
    p.setup = function () {
        hh = h / 4;
        dx = (6 / period) * 20;
        let cnv = p.createCanvas(w, h);
        cnv.position(0, 0, "absolute");
        cnv.style("z-index: -100");

        for (let i = 0; i < 350; i++) {
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
        if (!isMobile) {
            p.noStroke();
            p.fill(72,159,181);
            p.rect(0, 0, w, h);
            p.fill(20);
            p.rect(0, 0, w, hh - 150);
            for (let i of arrSines) {
                i.update();
                p.rect((i.pos.n * w) / sines + 1, i.pos.y + hh - 250, w / sines + 1, 200);
            }
            p.noStroke();
            for (let i of arrPart) {
                p.fill(255);
                i.update();
                p.circle(i.pos.x, i.pos.y, i.size);
            }
        }
    };
};

class particle {
    constructor(c) {
        this.pos = { x: Math.random() * w, y: Math.random() * hh * 2};
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

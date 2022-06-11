const container = document.getElementById("container");
const containerHeight = 500;
const containerWidth = 500;
const noOfBalls = 2;

class Ball {
  constructor(px, py, d, speedX, speedY, dx = 1, dy = 1) {
    this.px = px;
    this.py = py;
    this.dx = dx;
    this.dy = dy;
    this.d = d;
    this.speedX = speedX;
    this.speedY = speedY;
    // this.cx=cx;
    // this.cy=cy;
  }

  createBall() {
    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.height = `${this.d}px`;
    this.element.style.width = `${this.d}px`;
    this.element.style.backgroundColor = "red";
    this.element.style.borderRadius = "50%";
    this.element.style.top = `${this.px}px`;
    this.element.style.left = `${this.py}px`;
    container.appendChild(this.element);
  }

  toPx(value) {
    return `${value}px`;
  }

  moveBall() {
    this.px += this.speedX * this.dx; //if called inside class elements use this.feature only
    this.py += this.speedY * this.dy;

    this.element.style.top = this.toPx(this.px); //if called css, this.csskonaam.style
    this.element.style.left = this.toPx(this.py);
  }

  currentPosition(name) {
    // console.log(name, this.px, this.py, this.d);
    // console.log(noOfBalls)

    this.cx = this.px + this.d / 2;
    this.cy = this.py + this.d / 2;

    console.log(name, this.cx, this.cy);
  }

  boundaryCheck() {
    if (this.px >= containerWidth - this.d) {
      this.dx = -1;
    }
    if (this.py >= containerHeight - this.d) {
      this.dy = -1;
    }
    if (this.px <= 0) {
      this.dx = 1;
    }
    if (this.py <= 0) {
      this.dy = 1;
    }
  }
}

let x = [];
for (let j = 0; j < noOfBalls; j++) {
  z = "ball" + [j + 1];
  x.push(z);
}

for (let i = 0; i < noOfBalls; i++) {
  var px = Math.floor(Math.random() * 450 + 1); //1-450
  var py = Math.floor(Math.random() * 400 + 1); //1-400
  let d = Math.floor(Math.random() * 50 + 1); //10-51
  if (d < 15) {
    d = 15;
  }
  // speedX=0.5;
  // speedY=0.5
  let speedX = Math.floor(Math.random() * 7 + 1); //1-8 //*7
  let speedY = Math.floor(Math.random() * 7 + 1); //1-8 //*7

  x[i] = new Ball(px, py, d, speedX, speedY);
  x[i].createBall();
  x[i].boundaryCheck();
}

function play() {
  for (let i = 0; i < noOfBalls; i++) {
    let z = "ball-" + [i + 1];
    x[i].moveBall();

    x[i].currentPosition(z);
    x[i].boundaryCheck();
    // console.log(x[i])
  }

  {
    window.requestAnimationFrame(() => {
      // play();
    });
    // setInterval(play,3000)
  }
}
play();

const container = document.getElementById("container");
const containerHeight = 500;
const containerWidth = 500;

class Ball {
  constructor(px, py, h, w, speedX, speedY, dx = 1, dy = 1) {
    this.px = px;
    this.py = py;
    this.dx = dx;
    this.dy = dy;
    this.h = h;
    this.w = w;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  createBall() {

    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.height = `${this.h}px`;
    this.element.style.width = `${this.w}px`;
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
    this.px += this.speedX * this.dx;  //if called inside class elements use this.feature only
    this.py += this.speedY * this.dy;

    this.element.style.top = this.toPx(this.px);//if called css, this.csskonaam.style
    this.element.style.left = this.toPx(this.py);
  }

  boundaryCheck() {
    console.log("boundary Check");
    if (this.px >= containerWidth - this.h) {
      this.dx = -1;
    }
    if (this.py >= containerHeight - this.w) {
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


function generateRandomIntegerInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const noOfBalls=10
let x=[]
for(let j=0; j<noOfBalls; j++){ 
  z="ball"+[j+1]
  x.push(z)
}


for (let i = 0; i < noOfBalls; i++) { 
  var px = Math.floor(Math.random() * 450 + 1); //1-400
  var py = Math.floor(Math.random() * 400 + 1); //1-400
  var h = Math.floor(Math.random() * 40 + 10);//10-51
  var w = h;
  var speedX = Math.floor(Math.random() * 7 + 1);//1-8
  var speedY = Math.floor(Math.random() * 7 + 1);//1-8

  x[i] = new Ball(px, py, h, w, speedX, speedY);
  console.log(x[i])
  x[i].createBall();
  x[i].moveBall();
  x[i].boundaryCheck();
}


function play() {
  for (let i = 0; i < noOfBalls; i++) { //if ball increases incresase here

    x[i].moveBall();
    x[i].boundaryCheck();
  }

  {
    window.requestAnimationFrame(() => {
      play();
    });
  }
}
play();

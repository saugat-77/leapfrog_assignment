const container = document.getElementById("container");
const containerHeight = 500;
const containerWidth = 500;
const noOfBalls = 10;

class Ball {
  constructor(px, py, d, speedX, speedY, color, dx = 1, dy = 1) {
    this.px = px;
    this.py = py;
    this.dx = dx;
    this.dy = dy;
    this.d = d;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }
  
  createBall() {
    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.height = `${this.d}px`;
    this.element.style.width = `${this.d}px`;
    this.element.style.backgroundColor = "red";
  
    this.element.style.borderColor = "black";
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

  currentPosition() {

    let obj = {};

    obj.cx = this.px + this.d / 2;
    obj.cy = this.py + this.d / 2;
    return obj;
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
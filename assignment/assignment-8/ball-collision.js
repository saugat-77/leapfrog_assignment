const container = document.getElementById("container");
const containerHeight = 500;
const containerWidth = 500;
const noOfBalls = 3;

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

  currentPosition() {
    let obj = {};
    obj.cx = this.px + this.d / 2;
    obj.cy = this.py + this.d / 2;
    // console.log( this.cx, this.cy);
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

  let speedX = Math.floor(Math.random() * 7 + 1); //1-8 //*7
  let speedY = Math.floor(Math.random() * 7 + 1); //1-8 //*7

  x[i] = new Ball(px, py, d, speedX, speedY);
  x[i].createBall();
  x[i].boundaryCheck();
}

function play() {
  for (let i = 0; i < noOfBalls; i++) {   
    x[i].moveBall();

    let centeriX = x[i].currentPosition().cx;
    let centeriY = x[i].currentPosition().cy;
    let ri = x[i].d / 2;

    for (let j = i + 1; j < noOfBalls; j++) {
      let rj = x[j].d / 2;

      let centerjX = x[j].currentPosition().cx;
      let centerjY = x[j].currentPosition().cy;

      distanceX = Math.pow(centeriX - centerjX, 2);
      distanceY = Math.pow(centeriY - centerjY, 2);

      distance = Math.sqrt(distanceX + distanceY);

      if (distance <= ri+rj) {
        x[i].dx=-1;
        x[j].dy=-1;
  
        
      }
    }

    x[i].boundaryCheck();
  }

  {
    window.requestAnimationFrame(() => {
      play();
    });
    // setInterval(play,3000)
  }
}
play();

const ball = document.getElementById("ball");

let speedX = 20;
let speedY = 20;
const ballheight=50;
const height = 500;
const width = 500;
let positionX = width / 2;
let positionY = height / 2;
ball.style.left = `${positionX}px`;
ball.style.top = `${positionX}px`;

setInterval(bounce, 100);
function bounce() {
  positionY += speedY;
  positionX += speedX;

  ball.style.left = `${positionX}px`;
  ball.style.top = `${positionY}px`;
  console.log(ball.style.top, height);
  console.log(ball.style.left, width);

  //   ball.style.top = `${height / 2 + speed}px`;
  //   console.log(ball.style.left)
  if (positionY +ballheight >= height || positionY <=10) {
    // console.log("out from height")
    speedY *= -1;
  }
  if (positionX +ballheight >= width || positionX <=0) {
    // console.log("out from height")
    speedX *= -1;
  }
}

bounce();

const ball = document.getElementById("ball");

// class Ball{
//   constructor()
// }
let speed= 20;
const ballheight=50;
const height = 500;
const width = 500;
let positionX = width / 2;
let positionY = height / 2;
ball.style.left = `${positionX}px`;
ball.style.top = `${positionX}px`;

setInterval(bounce, 50);

function bounce() {
  positionY += speed;

  ball.style.top = `${positionY}px`;
  console.log(ball.style.top, height);

  if (positionY +ballheight >= height || positionY <=10) {
    // console.log("out from height")
    speed *= -1;
  }
}

bounce();

let x = [];
for (let j = 0; j < noOfBalls; j++) {
  z = "ball" + [j + 1];
  x.push(z);
}
let checkX = [];
let checkY = [];
let count=0;
let diameter=[];

for (let i = 0; i < noOfBalls; i++) {
  console.log("i ko loop")
  let d = Math.floor(Math.random() * 50 + 1);
  if (d < 15) {
    d = 15;
  }
  diameter.push(d)
  console.log("This is a diameter",diameter)

  let px = Math.floor(Math.random() * containerWidth - 5);
  let py = Math.floor(Math.random() * containerHeight - 5);
  checkX.push(px);
  checkY.push(py);
  
  for (let j = 0; j < i ; j++) {
  console.log("j ko loop")

    
    function checkBall() {
      let cx1 = px + d / 2;
      let cy1 = py + d / 2;
      distanceX = Math.pow(cx1 - checkX[j], 2);//j+1
      distanceY = Math.pow(cy1 - checkY[j], 2); //j+1
      distance = Math.sqrt(distanceX + distanceY);
      
      if (distance < diameter[j]+d){

        console.log("hello peps")

        let px = Math.floor(Math.random() * containerWidth - 5);
        let py = Math.floor(Math.random() * containerHeight - 5);
        checkX[i]=px;
        checkY[i]=py;
        checkBall();
      }



    }
    checkBall();
  }
  
  
  let speedX = Math.floor(Math.random() * 7 + 1);
  let speedY = Math.floor(Math.random() * 7 + 1);
  
  x[i] = new Ball(px, py, d, speedX, speedY);
  x[i].createBall();
  x[i].boundaryCheck();
}


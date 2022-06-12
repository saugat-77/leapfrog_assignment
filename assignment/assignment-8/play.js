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
            console.log("out")
          x[i].dx=-1;
          x[j].dy=-1;
    
          
        }
      }
  
      x[i].boundaryCheck();
    }
  
    {
      window.requestAnimationFrame(() => {
        // play();
      });
      // setInterval(play,3000)
    }
  }
  play();
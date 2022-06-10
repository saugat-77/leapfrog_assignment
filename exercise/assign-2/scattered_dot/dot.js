const bigbox = document.getElementById("bigbox");

class Dots {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.render = () => {
      const dot = document.createElement("div");    
      bigbox.appendChild(dot)
      dot.style.position="absolute";
      dot.style.height="15px";
      dot.style.width="15px"
      dot.style.backgroundColor="red";
      dot.style.borderRadius="50%"
      dot.style.left= `${this.x}px`
      dot.style.top= `${this.y}px`

      dot.addEventListener("click" ,(e) =>{
        dot.style.display="none"
      })
      
    };
    this.render()
  }
}

var points = [
    {x: 10, y: 20},
    {x: 400, y: 400},
    {x: 350, y: 360},
    {x: 260, y: 180},
    {x: 370, y: 100},
    {x: 180, y: 120},

    
];



for (let point of points){
    const box= new Dots(point["x"], point["y"])
}


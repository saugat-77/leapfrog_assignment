const container= document.getElementsByClassName('container')
const images= document.getElementById('images')

let interval=0;
let activeIndex = 0;
let slide = 0;
let marginPixel = 0;

const imageWidth=510;
const imageCount=images.children.length;

for (let i=0; i<imageCount; i++){
    const image =images.children[i];

    let z = i*imageWidth
    image.style.left=`${z}px`

    console.log(image.style.left)
}

//creating buttons
let prevBtn = document.createElement("button");
prevBtn.setAttribute("id", "prev"); //id ko value previous
prevBtn.setAttribute("class", "left-arrow");
prevBtn.innerHTML = "&#10094;";

let nextBtn = document.createElement("button");
nextBtn.setAttribute("id", "next");
nextBtn.setAttribute("class", "right-arrow");
nextBtn.innerHTML = "&#10095;";

let btnWrapper = document.createElement("div");
btnWrapper.setAttribute("class", "btnWrapper"); //class name btnwrap

let btnContainer = document.createElement("div");
btnContainer.setAttribute("class", "btnContainer");
let slideWrap = document.getElementsByClassName("sliderContainer")[0];
slideWrap.append(btnWrapper);
btnWrapper.append(btnContainer);
btnContainer.append(prevBtn);
btnContainer.append(nextBtn);


let dots = document.createElement("div");
dots.setAttribute("id", "dots");
for (let i = 0; i < imageCount; i++) {
  let dot = document.createElement("span");
  dot.setAttribute("class", "dot");
  dot.setAttribute("id", "dot");
  dots.appendChild(dot);
}
slideWrap = document.getElementsByClassName("sliderContainer")[0];
slideWrap.append(dots);


nextBtn.onclick = function () {
  next();
};

prevBtn.onclick = function () {
  previousImage();
};
function next() {
    // console.log("next -1")
  if (activeIndex == imageCount - 1) {
    activeIndex = 0;
    slidePrev(0, 30);
  } else {
    activeIndex++;
    marginPixel = -(510 * activeIndex);
    slideNext(marginPixel, 30);
  }
  setActivedots(activeIndex);
}
next();

function previousImage() {
    // console.log("previousImage -2")

  if (activeIndex !== 0) {
    let slidePx = marginPixel + 510;
    slidePrev(slidePx, 30);
    activeIndex--;
  } else {
    activeIndex = imageCount - 1; //2
    slidePx = -(510 * activeIndex);
    slideNext(slidePx, 30);
  }

  setActivedots(activeIndex);
}

function slideNext(marginPixel, slidePx) {

    // console.log("slideNext -3")

  let interval = setInterval(() => {
    slide -= slidePx;
    images.style.left = `${slide}px`;

    // console.log(slide);
  }, 50);
  //   console.log("interval",interval)
  setInterval(() => {
    if (slide > marginPixel) {
      interval;
    //   if (interval === 3 * 510) {
    //     interval = 0;
    //   }
    //   console.log("interval", interval);
    } 
    else {
      clearInterval(interval);
    }
  }, 50);
}

function slidePrev(marginPixel, slidePx) {

    // console.log("slidePev -4")

  let interval = setInterval(() => {
    slide += slidePx;
    images.style.left = `${slide}px`;
  }, 10);
  setInterval(() => {
    if (slide < marginPixel) {
      interval;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function setActivedots(activeIndex) {
    // console.log("setActiveDots -5")

  for (let i = 0; i < imageCount; i++) {
    dots.children[i].classList.remove("active");
  }
  dots.children[activeIndex].setAttribute("class", "active");
//   next();
}

for (let i = 0, len = dots.children.length; i < len; i++) {
    console.log(i)

  dots.children[i].onclick = function ()  {

    // console.log("for -6")

    if (activeIndex === i) {
      clearInterval(interval);
    }
     else if (activeIndex > i) {
        previousImage();
    }
     else {
      next();
    }
  };

  setInterval(
   dots.children[i]= function ()  {
    if (activeIndex === i) {
      clearInterval(interval);
    }
     else if (activeIndex > i) {
        previousImage();
    }
     else {
      next();
    }
  }, 3000)
}

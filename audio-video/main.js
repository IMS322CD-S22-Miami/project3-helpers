let mySound;

function preload() {
  mySound = loadSound("bell.mp3");
}

function setup() {
  createCanvas(100, 40).parent("#p5-canvas");
  background(100);
  text('click here to play', 5, 20);
}

// Notice there is no draw function since we aren't actually animating anything!

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 40) {
    mySound.play();
  }
}
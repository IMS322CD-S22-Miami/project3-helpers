let myMap;
let circleX = 168;
let circleY = 254;
let circleD = 20;

function preload() {
  myMap = loadImage("campus-map.png");
}

function setup() {
  createCanvas(470, 470).parent("#p5-canvas");
  image(myMap, 0, 0, 470, 470);
}

function draw() {
  let hit = collidePointCircle(mouseX, mouseY, circleX, circleY, circleD);
  circle(circleX, circleY, circleD);

  if (hit) {
    fill("red");
  } else fill("green");
}
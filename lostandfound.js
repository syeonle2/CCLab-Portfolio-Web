function setup() {
  //create canvas with a size of 400 by 400
  createCanvas(400, 400);
}

function draw() {
  //use the default blend mode
  blendMode(BLEND);
  
  //determine the color of the background
  background(255,248,220);
  
  //draw the border of the key
  push();
  noStroke();
  fill(0,128,255);
  circle(200,230,80);
  pop();
  
  //draw the inner circle of the key
  push();
  blendMode(SOFT_LIGHT);
  fill(255);
  noStroke();
  circle(200,230,45);
  pop();
  
  //draw the ring
  push();
  strokeWeight(3);
  stroke(218,165,32);
  noFill();
  circle(200,185,30);
  pop();
  
  //draw the bow part of the key
  push();
  strokeWeight(12);
  stroke(218,165,32);
  noFill();
  circle(210,160,40);
  pop();
  
  //draw the blade part of the key
  push();
  //move the origin
  translate(210,160);
  //rotate the blade
  rotate(120);
  noStroke();
  fill(218,165,32);
  rect(20,-5,50,15);
  rect(40,-15,10,10);
  rect(55,-15,10,10);
  pop();
}
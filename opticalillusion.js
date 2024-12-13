function setup() {
  createCanvas(600, 600);
  background(0);
  colorMode(HSB);
  noStroke();
}

//define variables
//constrained variables
const numShapes = 30;
const maxSize = 400;
//variables that can change
let time = 0.0;
let amp = 8.0;
let spacing = maxSize/numShapes;

//reset background
function mousePressed() {
  background(0);
}

function draw() {
  //draw bubbles on the background
  drawBubbles();
  //draw random colors of circles depending on their remains
  for (var i = 0; i < numShapes; i++) {
    fill(random(360), 50, 100);
    let circleSize = spacing*i;
    circleSize = maxSize - circleSize;
    
    //make circles move with frequency
    let waveX = cos(radians(i)*20.0+time)*amp;
    let waveY = sin(radians(i)*20.0+time)*amp;
    //fill the spacing with black circles
    if (i%2===0) {
      fill(random(360),50,100);
    } else if (i%2===1) {
      fill(0);
    }
    //define variables of the position of the ellipse and center them
    let x = waveX + width/2;
    let y = waveY + height/2;
    //draw circles, 4 smaller circles will move in opposite direction
    ellipse(x,y,circleSize,circleSize);
    ellipse(y/2,x/2,circleSize/2,circleSize/2);
    ellipse(600-y/2,600-x/2,circleSize/2,circleSize/2);
    ellipse(x/4+20,600-y/4-20,circleSize/4,circleSize/4);
    ellipse(400+y/4+20,x/4+20,circleSize/4,circleSize/4);
  }
  //let time pass
  time+=0.1;
}

//draw random color bubbles following your mouse cursor's position on the background
function drawBubbles() {
  fill(random(360),50,100);
  circle(mouseX,mouseY,20);
  fill(random(360),70,100,200);
  circle(width-mouseX, height-mouseY,30);
  fill(random(180),50,100);
  circle(width/2-mouseX, height/2-mouseY,10);
}
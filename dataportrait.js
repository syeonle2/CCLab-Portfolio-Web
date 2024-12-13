//define variables and array
let seatPosX = [25,75,125,175,225,275,325,375];
let seatPosY = [25,75,125,175,225,275,325,375];
let mySeat = [175,75,325,0,75,275];
let initialRect = 0;
let timer = 0;
let timeToComplete = 3;

const mySeatSpace = 10;
const circleSize = 10;
const rectSize = 10;

function setup() {
  createCanvas(400, 600);
  colorMode(HSB);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  //define timers
  timer += deltaTime/1000;
  if (timer >= timeToComplete) {
    timer = timeToComplete;
  }

  push();
  frameRate(60);
  fill(0,0,100,0.01);
  rectMode(CORNER);
  //how far my eyes were drawn
  for (k = 0; k < mySeat.length; k++) {
  let timerCompletion = timer/timeToComplete;
    rect(25, seatPosY[k+1], mySeat[k]*timerCompletion, rectSize);
  }
  pop();
 
  //MON
  //seats on the train
  fill(0,0,100);
  rect(200, seatPosY[1], 350, 1);
  fill(300,50,100);
  circle(seatPosX[1], seatPosY[1], circleSize);
  fill(50,50,100);
  rect(seatPosX[2], seatPosY[1], rectSize, rectSize);
  fill(120,50,100);
  triangle(seatPosX[3]-5, seatPosY[1]+5, seatPosX[3], seatPosY[1]-5, seatPosX[3]+5, seatPosY[1]+5);
  fill(170,50,100);
  ellipse(seatPosX[4], seatPosY[1], circleSize*2, circleSize);
  fill(20,50,100);
  rect(seatPosX[5], seatPosY[1], rectSize*3, rectSize);
  fill(230,50,100);
  circle(seatPosX[6], seatPosY[1], circleSize);
  //where did I sit?
  //draw yellow circles on top of the shape
  let mySeatSpace = 20;
  push();
  stroke(50,50,100);
  noFill();
  for (let i = 0; i <4; i++) {
    circle(seatPosX[3], seatPosY[1], mySeatSpace+i*10);
   if (i >= 4) {
    i = 0;
   } 
  }
  pop();
  
  //TUE
  fill(0,0,100);
  rect(width/2, seatPosY[2], 350, 1);
  push();
  pop();
  rectMode(CENTER);
  fill(300,50,100);
  circle(seatPosX[1], seatPosY[2], circleSize);
  fill(50,50,100);
  rect(seatPosX[2], seatPosY[2], rectSize, rectSize);
  fill(120,50,100);
  triangle(seatPosX[3]-5, seatPosY[2]+5, seatPosX[3], seatPosY[2]-5, seatPosX[3]+5, seatPosY[2]+5);
  fill(170,50,100);
  ellipse(seatPosX[4], seatPosY[2], circleSize*2, circleSize);
  fill(20,50,100);
  rect(seatPosX[5], seatPosY[2], rectSize*3, rectSize);
  fill(230,50,100);
  circle(seatPosX[6], seatPosY[2], circleSize);
  
  push();
  stroke(50,50,100);
  noFill();
  for (let i = 0; i <4; i++) {
    circle(seatPosX[1], seatPosY[2], mySeatSpace+i*10);
   if (i >= 4) {
    i = 0;
   } 
  }
  pop();
  
  //WED
  fill(0,0,100);
  rect(width/2, seatPosY[3], 350, 1);
  push();
  pop();
  rectMode(CENTER);
  fill(300,50,100);
  circle(seatPosX[1], seatPosY[3], circleSize);
  fill(50,50,100);
  rect(seatPosX[2], seatPosY[3], rectSize, rectSize);
  fill(120,50,100);
  triangle(seatPosX[3]-5, seatPosY[3]+5, seatPosX[3], seatPosY[3]-5, seatPosX[3]+5, seatPosY[3]+5);
  fill(170,50,100);
  ellipse(seatPosX[4], seatPosY[3], circleSize*2, circleSize);
  fill(20,50,100);
  rect(seatPosX[5], seatPosY[3], rectSize*3, rectSize);
  fill(230,50,100);
  circle(seatPosX[6], seatPosY[3], circleSize);
  
  push();
  stroke(50,50,100);
  noFill();
  for (let i = 0; i <4; i++) {
    circle(seatPosX[6], seatPosY[3], mySeatSpace+i*10);
   if (i >= 4) {
    i = 0;
   } 
  }
  pop();
  
  //THU
  fill(0,0,100);
  rect(width/2, seatPosY[4], 350, 1);
  push();
  pop();
  rectMode(CENTER);
  fill(300,50,100);
  circle(seatPosX[1], seatPosY[4], circleSize);
  fill(50,50,100);
  rect(seatPosX[2], seatPosY[4], rectSize, rectSize);
  fill(120,50,100);
  triangle(seatPosX[3]-5, seatPosY[4]+5, seatPosX[3], seatPosY[4]-5, seatPosX[3]+5, seatPosY[4]+5);
  fill(170,50,100);
  ellipse(seatPosX[4], seatPosY[4], circleSize*2, circleSize);
  fill(20,50,100);
  rect(seatPosX[5], seatPosY[4], rectSize*3, rectSize);
  fill(230,50,100);
  circle(seatPosX[6], seatPosY[4], circleSize);
  
  //FRI
  fill(0,0,100);
  rect(width/2, seatPosY[5], 350, 1);
  push();
  pop();
  rectMode(CENTER);
  fill(300,50,100);
  circle(seatPosX[1], seatPosY[5], circleSize);
  fill(50,50,100);
  rect(seatPosX[2], seatPosY[5], rectSize, rectSize);
  fill(120,50,100);
  triangle(seatPosX[3]-5, seatPosY[5]+5, seatPosX[3], seatPosY[5]-5, seatPosX[3]+5, seatPosY[5]+5);
  fill(170,50,100);
  ellipse(seatPosX[4], seatPosY[5], circleSize*2, circleSize);
  fill(20,50,100);
  rect(seatPosX[5], seatPosY[5], rectSize*3, rectSize);
  fill(230,50,100);
  circle(seatPosX[6], seatPosY[5], circleSize);
  
  push();
  stroke(50,50,100);
  noFill();
  for (let i = 0; i <4; i++) {
    circle(seatPosX[1], seatPosY[5], mySeatSpace+i*10);
   if (i >= 4) {
    i = 0;
   } 
  }
  pop();
  
  //SAT
  fill(0,0,100);
  rect(width/2, seatPosY[6], 350, 1);
  push();
  pop();
  rectMode(CENTER);
  fill(300,50,100);
  circle(seatPosX[1], seatPosY[6], circleSize);
  fill(50,50,100);
  rect(seatPosX[2], seatPosY[6], rectSize, rectSize);
  fill(120,50,100);
  triangle(seatPosX[3]-5, seatPosY[6]+5, seatPosX[3], seatPosY[6]-5, seatPosX[3]+5, seatPosY[6]+5);
  fill(170,50,100);
  ellipse(seatPosX[4], seatPosY[6], circleSize*2, circleSize);
  fill(20,50,100);
  rect(seatPosX[5], seatPosY[6], rectSize*3, rectSize);
  fill(230,50,100);
  circle(seatPosX[6], seatPosY[6], circleSize);
  
  push();
  stroke(50,50,100);
  noFill();
  for (let i = 0; i <4; i++) {
    circle(seatPosX[6], seatPosY[6], mySeatSpace+i*10);
    circle(seatPosX[5], seatPosY[6], mySeatSpace+i*10);
   if (i >= 4) {
    i = 0;
   } 
  }
  pop();
  
  //SUN
  //I didn't take train on Sunday, I was at home
  fill(0,0,100);
  rect(width/2, seatPosY[7], 350, 1);
}
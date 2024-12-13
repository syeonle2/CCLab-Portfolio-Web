let blushHue = 345;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  frameRate(20);
  background(0);
  
  let facewidth = mouseX+50;
  let lippositionX = (width/2)-(facewidth/6);
  let starsize = random(width/20,width/40);
  let starpositionX = random(width, width/20);
  let starpositionY = random(width, width/20);
  let bubblesizedynamic = random(width/2, width/4);
  let bubblesizechill = random(width/2, width/2.2);
  
  
  //face
  push()
  colorMode(HSB);
  noStroke();
  fill(frameCount/4 %360, 50, 100);
  circle(mouseX, 100, bubblesizedynamic);
  circle(mouseX+50,200,bubblesizechill);
  fill(360-frameCount/4%360, 50, 100);
  circle(mouseX-100,280,bubblesizedynamic);
  circle(100, mouseX, mouseX);
  circle(200,200,bubblesizechill);
  circle(mouseX,150,150);
  circle(400-mouseX,250,200);
  pop();
  
  //left eye
  noStroke();
  fill(0);
  circle(100,200,100-mouseY/8);
  noStroke();
  fill(255);
  circle(80,180,30-mouseY/16);
  
  //right eye
  noStroke();
  fill(0);
  circle(300,200,100-mouseY/8);
  noStroke();
  fill(255);
  circle(280,180,30-mouseY/16);
  
  //lips
  noStroke();
  fill(255,88,88);
  circle(lippositionX,300,30);
  
  //shooting star
  fill(255);
  circle(mouseX-30,mouseY/2,starsize);
  fill(255, 74, 174);
  circle(mouseX+30,mouseY/2+50,starsize*2);
  fill(240);
  circle(starpositionX,starpositionY,starsize);
  
  //text
  fill(0);
  text("***", mouseX/2+30, mouseY+30);
  push()
  fill('tomato');
  textSize(20);
  text("ooooo", mouseX/2+80, mouseY-50);
  pop();
  
  //blush
  push()
  colorMode(HSB);
  fill(blushHue,50,100);
  ellipse(100,250,60,35);
  ellipse(300,250,60,35);
  pop();
}

function mousePressed(){
    blushHue = random(0,359);
  }
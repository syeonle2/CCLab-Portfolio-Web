function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
  //stage
  fill(132, 64, 163)
  rect(200,520,300,180);
  ellipse(200,430,300,150);
  //Icey's Head
  strokeWeight(2);
  //Ears
  fill(255,236,224);
  circle(150,125,20);
  circle(250,125,20);
  //Neck
  rectMode(CENTER);
  rect(200,170,40,80);
  //Face
  ellipse(200,120,100,95);
  //Eyes
  fill(255);
  ellipse(170,125,20,30);
  ellipse(230,125,20,30);
  fill(0);
  let leftEyepositionx = map(mouseX,0,width,167.5,170.5);
  let rightEyepositionx = map(mouseX,0,width,227.5,230.5);
  ellipse(leftEyepositionx,125,12.5,20);
  ellipse(rightEyepositionx,125,12.5,20);
  //Mouth
  if(mouseIsPressed===false)
    {
    noFill();
    beginShape();
    vertex(190,150);
    vertex(200,155);
    vertex(210,150);
    endShape();
    } else if (mouseIsPressed===true)
      {
      fill(255);
      ellipse(170,125,20,30);
      ellipse(230,125,20,30);
      fill(0);
      ellipse(170,125,10,12.5);
      ellipse(230,125,10,12.5);
      push();
      noStroke();
      fill(255,236,224);
      rect(200,150,30,16);
      pop();
      fill(255, 64, 64);
      ellipse(200,155,20,20);
      }
  //Hair
  fill(255, 121, 64);
  beginShape();
  vertex(200,51.75);
  bezierVertex(188.23,43.43,172.79,43.33,160.14,49.46); 
  bezierVertex(146.92,55.86,134.65,70.21,138.67,85.79); 
  bezierVertex(139.19,87.8,135.34,94.54,134.245,95.91);
  bezierVertex(130.12,101.05,123.32,103.95,116.77,105.05);
  bezierVertex(119.5147,106.6342,121.7743,108.9407,124.4384,110.6564);
  bezierVertex(144.5,123.58,170.6852,120.9,188.6429,105.54);
  bezierVertex(192.9,101.9,196.5643,97.8552,200,93.536);
  bezierVertex(203.4357,97.8552,207.01,101.9,211.36,105.54);
  bezierVertex(229.3148,120.9,255.5,123.58,275.56,110.6564);
  bezierVertex(278.2257,108.94,280.4853,106.6342,282.23,105.05);
  bezierVertex(276.68,103.9461,271.28,100.3144,267.1559,95.174);
  bezierVertex(266.0545,93.8,260.8062,87.81,261.3255,85.8);
  bezierVertex(265.36,70.16,253.13,55.88,240,49.46);
  bezierVertex(227.21,43.3344,211.77,43.43,200,51.75);
  endShape(CLOSE);
  //Hat
  fill(64, 131, 255);
  beginShape();
  vertex(160,30);
  vertex(155,85);
  vertex(200,68);
  endShape(CLOSE);
  fill(255, 64, 64);
  circle(160,30,20);
  //Hair pin
  fill(255, 236, 64);
  beginShape();
  vertex(240,60);
  vertex(235,70);
  vertex(230,72.5);
  vertex(235,75);
  vertex(240,85);
  vertex(245,75);
  vertex(250,72.5);
  vertex(245,70);
  endShape(CLOSE);
  //Calder's body
  //belly
  fill(255, 121, 64);
  beginShape();
  vertex(158.24,285);
  bezierVertex(133.5762,311.4221,128.1572,349.61,143.8373,378.0682);
  bezierVertex(161.07,409.3433,195.8453,414.46,200,415);
  bezierVertex(204.1547,414.46,238.93,409.3433,256.1627,378.07);
  bezierVertex(271.8428,349.61,266.4238,311.4221,241.762,285);
  endShape(CLOSE);
  line(160,330,240,330);
  line(150,350,250,350);
  line(160,370,240,370);
  //arms
  //left arm
  beginShape();
  vertex(100,235);
  vertex(70,245);
  vertex(75,275);
  vertex(85,271);
  vertex(82.5,250);
  vertex(100,244);
  endShape(CLOSE);
  //right art
  beginShape();
  vertex(300,255);
  vertex(330,255);
  vertex(335,285);
  vertex(325,285);
  vertex(320,267.5);
  vertex(300,266);
  endShape(CLOSE);
  //bag
  fill(0);
  rect(90,300,70,30);
  rect(90,315,65,40);
  rect(70,285,5,20);
  rect(110,285,5,20);
  rect(90,275,45,5);
  fill(255);
  circle(70,305,5);
  circle(110,305,5);
  //coffee
  fill(153, 60, 163);
  beginShape();
  vertex(300,332);
  vertex(300,360);
  bezierVertex(300,360,307.3333,368,320,368);
  bezierVertex(332.6667,368,340,360,340,360);
  vertex(340,360);
  vertex(340,332);
  vertex(300,332);
  endShape(CLOSE);
  fill(77, 27, 11);
  ellipse(320,330,40,20);
  //shirts
  fill(171, 237, 236);
  beginShape();
  vertex(220,200);
  vertex(230,180);
  vertex(250,200);
  vertex(265,250);
  vertex(305,250);
  vertex(303,270);
  vertex(245,270);
  vertex(240,280);
  vertex(220,285);
  endShape(CLOSE);
  beginShape();
  vertex(205,180);
  vertex(220,200);
  vertex(220,290);
  vertex(180,285);
  vertex(140,295);
  vertex(138,250);
  vertex(100,255);
  vertex(100,230);
  vertex(150,230);
  vertex(140,210);
  vertex(170,190);
  endShape(CLOSE);
  beginShape();
  vertex(170,180);
  vertex(165,200);
  vertex(200,200);
  vertex(205,180);
  endShape(CLOSE);
  beginShape();
  vertex(260,230);
  vertex(230,240);
  vertex(240,255);
  vertex(270,245);
  endShape(CLOSE);
  line(150,230,160,250);
  line(160,250,175,242);
  line(175,242,165,220);
  //more arms
  line(235,247,200,260);
  line(167.5,246,182,275);
  //YY's legs
  fill(102, 35, 13);
  ellipse(150,415,60,30);
  ellipse(250,415,60,30);
  
  moveNose();
  shootLights(mouseX,mouseY,random(50,200),random(30,170),random(40,165),random(50,65));
}

let x = 200;
let y = 130;

function moveNose() {
  //Nose
  fill(255, 64, 64);
  circle(x,y,20);
  if (keyIsDown(DOWN_ARROW)===true){
    y-=1;
  } else if (keyIsDown(UP_ARROW)===true) {
    y+=1;
  }
}

function shootLights(posX,posY,diameter,r,g,b) {
  push();
  noStroke();
  if (mouseIsPressed) {
  fill(r,g,b,100);
  circle(posX,posY,diameter);
  }
  pop();
}
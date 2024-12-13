function setup() {
  createCanvas(600, 600);
}

function draw() {
  //define background color's hue and brightness
  let bgHue = map(mouseY,0,height,240,190);
  let bgBright = map(mouseY,0,height,60,100);
  //set color mode from RGB to HSB
  colorMode(HSB);
  background(bgHue,50,bgBright);
  noStroke();
  //draw eyes
  //define white parts of the eyes' height
  //height of the white parts of the eyes is going to change in the value of mouse Y's position from the value of 0 to 75
  let whiteeyeHeight = map(mouseY,0,height,0,75);
  fill(255);
  ellipse(200,200,150,whiteeyeHeight);
  ellipse(400,200,150,whiteeyeHeight);
  //height of the black parts of the eyes is going to change in the value of mouse Y's position from the value of 0 to 30
  let blackeyeHeight = map(mouseY,0,height,0,30);
  fill(0);
  ellipse(200,200,60,blackeyeHeight);
  ellipse(400,200,60,blackeyeHeight);
  //close your eyes and go to bed
  if(whiteeyeHeight<10){
    fill(0);
    rect(125,195,150,10);
    rect(325,195,150,10);
    push()
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(20);
    fill(240,65,30);
    text('good night, sleep tight',300,100);
    pop();
  }
  //pull up the blanket
  let blanketY = map(mouseY,0,height,275,600);
  push()
  fill(100);
  rect(0,blanketY,600,400);
  fill(260,80,70);
  rect(0,blanketY+70,600,400);
  pop();
  //moon cycle at night
  let s = millis()/1000;
  if(mouseY<20){
    push()
    frameRate(30);
    fill(47,100,100);
    circle(300,480,150);
    fill(260,80,70);
    let x = 300*cos(s)+300;
    circle(x+300,480,160);
    fill(47,100,100);
    circle(150,530,10);
    circle(480,380,10);
    circle(420,420,25);
    
    push();
    //draw star shape
    
    
    beginShape();
    vertex(250,380);
    vertex(240,380);
    vertex(235,368);
    vertex(230,380);
    vertex(220,380);
    vertex(228,388);
    vertex(225,398);
    vertex(235,392);
    vertex(245,398);
    vertex(242,388);
    endShape(CLOSE);
    beginShape();
    
    pop();
    
    vertex(450,550);
    vertex(440,550);
    vertex(435,538);
    vertex(430,550);
    vertex(420,550);
    vertex(428,558);
    vertex(425,568);
    vertex(435,562);
    vertex(445,568);
    vertex(442,558);
    endShape(CLOSE);
    beginShape();
    vertex(120,480);
    vertex(110,480);
    vertex(105,468);
    vertex(100,480);
    vertex(90,480);
    vertex(98,488);
    vertex(95,498);
    vertex(105,492);
    vertex(115,498);
    vertex(112,488);
    endShape(CLOSE);
    pop();
}
  //do you want to wake me up?
  if(mouseIsPressed===true){
    background(15,100,100);
    push();
    frameRate(10);
    textAlign(CENTER);
    textSize(30);
    textStyle(BOLD);
    text('hey! what are you doing right now?',300,360);
    fill(255);
    circle(200,200,75);
    circle(400,200,75);
    rect(200,200,30,60);
    circle(215,260,30);
    circle(400,260,20);
    fill(0);
    circle(200,200,30);
    circle(400,200,30);
    fill(49,100,100);
    rect(0,400,600,50);
    pop();
  } else {
    frameRate(60);
  }
  //wake up! time to get up now
  if(whiteeyeHeight>65){
    push()
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(20);
    fill(190,100,100);
    text('rise and shine!',300,100);
    pop();
  }
  
  //Display Time on the top left
  push()
  fill(0);
  textStyle(BOLD);
  text(`total sleeping time: ${nf(s, 1, 1)} sec`, 20, 40, 100);
  pop();
  //draw a black circle oscillates left and right on top of the time displayer
  //calculate an x-coordinate
  fill(47,100,100);
  let xx = 40*cos(s)+57;
  circle(xx,20,10);
  
  clock();
}

//display a clock in the morning
  function clock() {
  //define variables
  let clockHour = hour();
  let min = minute();
  let sec = second();
  if(min<10){
    min = "0"+min;
    } else {
      min = min;
    }
  if(sec<10){
    sec = "0"+sec;
  } else {
    sec = sec;
  }
  if(mouseY>400){
    clockHour%=24
    push()
    textAlign(CENTER);
    textSize(70);
    textStyle(BOLD);
    textFont('Courier New');
    fill(47,100,100);
    text(clockHour+":"+min+":"+sec,300,450);
    pop();
  }
  }
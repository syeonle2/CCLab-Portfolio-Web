let currentScene = 6;

let houses = [];
let houseImages = [];
let correctHouse;
let houseFound = false;
let enterHouseTime = 0;

let ingredients = [];
let layers = [];
let maxLayers = 9;
let orangeLayerCount = 0;
let cakeFailedTime = 0;
let cakeFailed = false;

let protagonist;

let doorW = 30; let doorH = 60;
let bunnyX = 0;
let bunnyW = 60; let bunnyH = 30;
let gameOver = false;
let pileY = 320;
let cake;

let plating = false;

let brushColor = 'black';
let brushSize = 15;
let icing;

let invitationCard;

const petalCt = 20;
let petals = [];

const confettiCt = 20;
let confettis = [];

function preload() {
  EmilyCandy = loadFont('/Fonts/EmilysCandy-Regular.ttf');
  LifeSaversR = loadFont('/Fonts/LifeSavers-Regular.ttf');
  LifeSaversB = loadFont('/Fonts/LifeSavers-Bold.ttf');
  LifeSaversEB = loadFont('/Fonts/LifeSavers-ExtraBold.ttf');
  Cantora = loadFont('/Fonts/CantoraOne-Regular.ttf');
  Pangolin = loadFont('/Fonts/Pangolin-Regular.ttf');
  MonteCarlo = loadFont('/Fonts/MonteCarlo-Regular.ttf');
  
  mainbg = loadImage('/Images/mainbg.jpg');
  
  invitationCard = loadImage('/Images/InvitationCard.jpg');
  paw = loadImage('/Images/paw.png');
  cursorImage = loadImage('/Images/cursorImage.png');
  
  townbunny = loadImage('/Images/townbunny.png');
  townbg = loadImage('/Images/townbg.jpg');

  houseImages.push(loadImage('/Images/house1.png'));
  houseImages.push(loadImage('/Images/house2.png'));
  houseImages.push(loadImage('/Images/house3.png'));
  houseImages.push(loadImage('/Images/house4.png'));
  houseImages.push(loadImage('/Images/house5.png'));
  houseImages.push(loadImage('/Images/house6.png'));
  
  gamebg = loadImage('/Images/gamebg.jpg');
  
  credits = loadImage('/Images/credits.jpg');
  
  happybg = loadImage('/Images/happybg.jpg');
  
  sadbg = loadImage('/Images/sadbg.jpg');
  
  completedCake = loadImage('/Images/completedCake.png');
  
  dinnerpartybg = loadImage('/Images/dinnerpartybg.jpg');
  
  petalimg = loadImage('/Images/petalimg.png');
  
  icingbg = loadImage('/Images/icingbg.jpg');
  
  basket = loadImage('/Images/basket.png');
  
  narrationbg = loadImage('/Images/narrationbg.jpg');
  
  confettiimg = loadImage('/Images/confetti.png');
  
  ingredientsguide = loadImage('/Images/ingredientsguide.jpg');
}

function setup() {
  //set up the styles and alignments
  createCanvas(600,400);
  
  textAlign(CENTER);
  textFont(EmilyCandy);
  
  rectMode(CENTER);
  imageMode(CENTER);
  
  noStroke();
  
  //generating class objects
  protagonist = new Protagonist(30, 30, 20, 2);
  cake = new Cake();
  generateHouses();
  icing = new DrawingIcing();
  signature = new Signature();
  
  //falling petals for the main menu background
  for(let i = 0; i < petalCt; i++) {
    petals.push({x: random(width), y: random(height)});
  }
  
  //falling confettis for the happy dinner party scene background
  for(let j = 0; j < confettiCt; j++) {
    confettis.push({x: random(width), y: random(height)});
  }
}

function draw() {
  background(0);
  //scene numbering for easier scene management
  switch(currentScene) {
    case 0:
      enterScene();
      break;
      
    case 1: 
      gameScene();
      break;
      
    case 2:
      dinnerParty();
      break;
      
    case 3:
      sadDinner();
      break;
      
    case 4:
      happyDinner();
      break;
      
    case 5:
      icingCake();
     break;
     
    case 6:
      mainMenu();
      break;
      
    case 7:
      invitation();
      break;
      
    case 8:
      narration();
      break;
      
    case 9:
      gameCredit();
      break;
  }
}

function mainMenu() {
  image(mainbg, width/2, height/2);
  
  //let petals continuously fall from the top of the canvas in random speed
  for(let i = 0; i < petals.length; i++) {
    const petal = petals[i];
  
    image(petalimg, petal.x, petal.y);
  
      if(petal.y > height + 30) {
        petal.y = -30;
      } else {
        petal.y += random(0.5, 2);
      }
  }
  
  noStroke();
  fill('saddlebrown');
  textSize(12);
  textFont(Pangolin);
  text("v1.0.0", 560, 30);
  push();
  
  stroke('saddlebrown');
  strokeWeight(5);
  textFont(EmilyCandy);
  fill('papayawhip');
  textSize(64);
  text("Unusual",width/2 - 125, 120);
  fill('gold');
  text("Patissier", width/2 + 125, 120);
  
  strokeWeight(1);
  textSize(24);
  textFont(MonteCarlo);
  fill('saddlebrown');
  text("Fur Elizabeth", width/6*5, 150);
  
  strokeWeight(3);
  textFont(LifeSaversEB);
  fill('orange');
  textSize(30);
  text("Start Game", width/2, height/2 + 20);
  push();
  
  //change the text's color when mouse over
  if(mouseX >= 150 && mouseX <= 450 && mouseY >= height/2 && mouseY <= height/2 + 20) {
    fill('white');
    textSize(30);
    text("Start Game", width/2, height/2 + 20);
  } else {
    fill('orange');
    textSize(30);
    text("Start Game", width/2, height/2 + 20);
  }
  pop();
  fill('gold');
  textSize(30);
  text("Skip Intro", width/2, height/2 + 80);
  push();
  
    if(mouseX >= 150 && mouseX <= 450 && mouseY >= height/2 + 64 && mouseY <= height/2 + 96) {
      fill('white');
      text("Skip Intro", width/2, height/2 + 80);
     } else {
        fill('gold');
        text("Skip Intro", width/2, height/2 + 80);       
     }
  pop();
  
  fill('navajowhite');
  textSize(16);
  text("Credits", width/2, height/2 + 160);
  push();
  
    if(mouseX >= 150 && mouseX <= 450 && mouseY >= height/2 + 150 && mouseY <= height/2 + 170) {
      fill('white');
      text("Credits", width/2, height/2 + 160);
     } else {
        fill('navajowhite');
        text("Credits", width/2, height/2 + 160);       
       }
  pop();
  pop();
  
  image(cursorImage, mouseX, mouseY);
}

function mouseClicked() {
  //scene changes
  if(mouseX >= 150 && mouseX <= 450 && mouseY >= height/2 && mouseY <= height/2 + 20 && currentScene == 6) {
    currentScene = 7; 
  }
  
  else if(currentScene == 7 && mouseX >= 450 && mouseX <= 600 && mouseY >= 250 && mouseY <= 380 && signature.strokes.length > 0) {
    currentScene = 8; 
  } 
  
  else if(currentScene == 8 && narrationTextEnded) {
    currentScene = 0;
  } 
  
  else if(mouseX >= 150 && mouseX <= 450 && mouseY >= 350 && mouseY <= 370 && currentScene == 9) {
    currentScene = 6; 
  }
  
  else if(mouseX >= 150 && mouseX <= 450 && mouseY >= height/2 + 64 && mouseY <= height/2 + 96 && currentScene == 6) {
    currentScene = 0; 
  } 
  
  else if(mouseX >= 150 && mouseX <= 450 && mouseY >= height/2 + 150 && mouseY <= height/2 + 170 && currentScene == 6) {
    currentScene = 9;
  }
}


class Signature {
  constructor() {
    this.drawing = false;
    this.strokes = [];
    this.color = 'saddlebrown';
    this.size = 10;
  }

  startDrawing() {
    this.drawing = true;
  }

  stopDrawing() {
    this.drawing = false;
  }

  sign() {
    if (this.drawing) {
      if (mouseX >= 375 && mouseX <= 525 && mouseY >= 80 && mouseY <= 280) {
        this.strokes.push({ x: mouseX, y: mouseY, color: this.color, size: this.size });
      }
    }
  }

  display() {
    for (let stroke of this.strokes) {
      fill(stroke.color);
      circle(stroke.x, stroke.y, stroke.size);
    }
  }

  clear() {
    this.strokes = [];
  }

  setColor(newColor) {
    this.color = newColor;
  }

  setSize(newSize) {
    this.size = newSize;
  }
}

let signature;

//make text be in an array to make it appear one by one in order
let invitationText = [
  "Dear. My best friend", 
  "Hi, my friend! how are you?", 
  "I miss you so much. It's been", 
  "so long since I've seen you.",
  "I will be having a dinner party", 
  "this weekend. Hope you can come!", 
  "See you at the party! Love you!",
  "p.s. You know I love carrots!", 
  "             - Best wishes, Elizabeth"];

let textStartTime = 0;
let textIndex = 0;

function invitation() {
  image(invitationCard, width / 2, height / 2);
  
  fill('saddlebrown');
  textFont(Pangolin);
  textSize(15);
  push();
  textAlign(LEFT);
  
  //set up time to make animation for the texts they will be shown 1 by 1
  let currentTime = millis();
  
  //the time delay between each line will be 2 seconds
  if(currentTime - textStartTime > 2000 && textIndex < invitationText.length) {
    textIndex++;
    textStartTime = currentTime;
  }

  for(let i = 0; i < textIndex; i++) {
    text(invitationText[i], 45, 80 + i * 30);
  }
  pop();
  
  textSize(16);
  text("Draw signature on the sticky note and press seal", width / 2, height - 11);

  signature.sign();
  signature.display();
  
  //draw with mouse and when mouse is released, the brush would stop drawing
  if (mouseIsPressed) {
    signature.startDrawing();
  } else {
    signature.stopDrawing();
  }

  //players can press the seal with a paw
  if (mouseX >= 450 && mouseX <= 600 && mouseY >= 250 && mouseY <= 380) {
    image(paw, mouseX, mouseY);
  }
}

//broke up into two arrays of texts
let narrationText = [
  "OMG! I'm totally broke this month...",
  "What should I do?",
  "I don't want to miss Elise's party...",
  "It's been so long since I've seen her...",
  "She would be disappointed if",
  "I don't come..."
];

let narrationTextPt2 = [
  "Or, what if I make a cake for her?",
  "I'm not that good at baking, but I can ask for some help from my father!",
  "He'll probably know what to do...",
  "I should get back home really quick!",
];

//set up new variables for narration texts to make sure they don't follow the same time with the invitation card scene
let narrationTextStartTime = 0;
let narrationTextEnded = false;

//Click to go to the town message
let showClickMessage = false;

function narration() {
  image(narrationbg, width / 2, height / 2);

  let currentTime = millis();

  if (narrationTextStartTime === 0) {
    narrationTextStartTime = currentTime;
    textIndex = 0;
    narrationTextEnded = false;
    showClickMessage = false;
  }

  if (currentTime - narrationTextStartTime > 2000 && textIndex < narrationText.length) {
    textIndex++;
    narrationTextStartTime = currentTime;
  }

  //Go to the second array of texts after finishing the first narration part
  if (textIndex >= narrationText.length && !narrationTextEnded) {
    setTimeout(() => {
      narrationTextEnded = true;
      narrationTextStartTime = currentTime;
      textIndex = 0;
    }, 2000);
  }

  //bring part 2 narration text when part 1 ended * question mark and colon do same function with if else statements
  let currentNarrationText = narrationTextEnded ? narrationTextPt2 : narrationText;

  textSize(18);
  fill('saddlebrown');
  textFont(LifeSaversEB);

  for (let i = 0; i < textIndex; i++) {
    text(currentNarrationText[i], width / 2, 35 + i * 30);
  }

  //show click screen to go to the town when the final line of the texts is shown
  if (narrationTextEnded && textIndex >= 4 && !showClickMessage) {
    showClickMessage = true;
    narrationTextStartTime = currentTime;
  }

  if (showClickMessage) {
    fill('ivory');
    push();
    stroke('saddlebrown');
    strokeWeight(2);
    textSize(24);
    text("Click Screen to go to the Town!", width / 2, height / 2);
    pop();
  }

  if (showClickMessage && mouseIsPressed) {
    currentScene = 0;
  }
}


function enterScene() {
  image(townbg, width/2, height/2);
    
  fill('moccasin');
  circle(30, 30, 50);
  
  //movable protagonist bunny
  protagonist.update();
  protagonist.display();
  
  for (let i = 0; i < houses.length; i++) {
    houses[i].display();
    checkHouse();
  }
  
  if (houseFound) {
    if (millis() - enterHouseTime > 2000) {
      currentScene = 1;
    } else {
      textFont(LifeSaversEB);
      textSize(32);
      push();
      stroke('saddlebrown');
      strokeWeight(3);
      fill('white');
      text("Home Sweet Home!", width / 2, height / 2);
      pop();
    }
    return;
  }
  
  fill('white');
  textFont(LifeSaversEB);
  textSize(18);
  push();
  stroke('saddlebrown');
  strokeWeight(2);
  text("Gotta go home! Oh my god, I'm terrible with directions...", width/2, 30);
  text("Use wasd to find your house!", width/2, height - 25);
  pop();
  
  textFont(Cantora);
  textSize(11);
  fill('white');
  text("You're here!", 30, 70);
}

class Protagonist {
  constructor(proX, proY, proSize, proSpeed) {
    this.x = proX;
    this.y = proY;
    this.size = proSize;
    this.speed = proSpeed; 
  }
  
  //movable character with wasd keys
  update() {
    if (keyIsDown(65)) {
      this.x -= this.speed;
    }
    if (keyIsDown(68)) {
      this.x += this.speed;
    }
    if (keyIsDown(87)) {
      this.y -= this.speed;
    }
    if (keyIsDown(83)) {
      this.y += this.speed;
    }
    
    //to make sure the protagonist bunny doesn't go out of the screen
    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }
  
  display() {
    image(townbunny, this.x, this.y);
  }
}

class House {
  constructor(houseX, houseY, image, isCorrect) {
    this.x = houseX;
    this.y = houseY;
    this.image = image;
    this.isCorrect = isCorrect;
  }
  
  display() {
    image(this.image, this.x, this.y)
  }
  
  //to set up how system can know the bunny is in the house based on the size of the image of the house
  isInside(houseX, houseY, size) {
    return houseX + 35 > this.x - 30 && 
           houseX - 35 < this.x + 30 && 
           houseY + 35 > this.y - 30 && 
           houseY - 35 < this.y + 30;
  }
}

function generateHouses() {
  //system is going to try over and over again to make sure the house doesn't overlap with each other and stay inside the canvas, but the max attempts for it is constrained to 500, so it won't be too overwhelming for the computer, but I thought that 500 would be surely enough to meet all the conditions that I gave to the system but just in case it keeps doing the job over and over again forever
  let attempts = 0;
  let maxAttempts = 500;
  
  while (houses.length < 8 && attempts < maxAttempts) {
    let houseImage = random(houseImages);
    let houseWidth = 70;
    let houseHeight = 60;
    
    let housePosX = random(60, width - 60);
    let housePosY = random(80, height - 80);
    
    let overlap = false;
    
    //houses would better not overlap with each other
    for(let i = 0; i < houses.length; i++) {
      if (dist(housePosX, housePosY, houses[i].x, houses[i].y) < (houseWidth + 35)) {
        overlap = true;
        break;
      }
    }
    
    if (!overlap) {
      let isCorrect = houses.length === 0;
      houses.push(new House(housePosX, housePosY, houseImage, isCorrect));
      
      if(isCorrect) {
        correctHouse = houses[houses.length - 1];
      }
    }
    attempts++;
  }
}

function checkHouse() {
  if (correctHouse.isInside(protagonist.x, protagonist.y, protagonist.size)) {
    if(!houseFound) {
    houseFound = true;
    enterHouseTime = millis();
    }
    
    //when the bunny finds her house, the bunny is going to stop moving around and after giving a little pause after displaying home sweet home message, the scene is going to change, it's not directly coded in this part but just to explain why I'm counting the time here
    protagonist.speed = 0;
    return;
  } else {
    //the bunny is going to keep moving if she didn't find the house
    protagonist.speed = 2;
    for (let i = 0; i < houses.length; i++) {
      if (!houses[i].isCorrect && houses[i].isInside(protagonist.x, protagonist.y, protagonist.size)) {
        textSize(32);
        fill('gold');
        push();
        stroke('saddlebrown');
        strokeWeight(3);
        textFont(LifeSaversEB);
        text("Omg! You are in the wrong house!", width / 2, height / 2);
        pop();
        return;
      }
    }
  }
}

function gameScene() {
  image(gamebg, width/2, height/2);
  image(ingredientsguide, width/2, 40);
  
  push();
  strokeWeight(2);
  stroke('saddlebrown');
  fill('ivory');
  textFont(LifeSaversEB);
  textSize(18);
  text("Move your mouse to catch ingredients for your cake!", width/2, height - 20);
  pop();
  
  cakePile();
  
  //movable basket for the bunny with mouse
  bunnyX = mouseX;
  bunnyX = constrain(bunnyX, 0, width);

  image(basket, bunnyX, pileY);
  
  //ingredients are going to be keep falling from the top of the canvas unless the cake is completed
  if(frameCount % 60 === 0 && !gameOver) {
    throwIngredient();
  }
  
  //the same color of the layers with the catched ingredinets are going to pile in the middle of the canvas
  for(let i = ingredients.length - 1; i >= 0; i--) {
    ingredients[i].update();
    ingredients[i].display();
    if(ingredients[i].catched(bunnyX, pileY, bunnyW, bunnyH)) {
      let color = ingredients[i].color;
      addLayer(color);
      ingredients.splice(i,1);
    } else if (ingredients[i].y > height) {
      ingredients.splice(i,1);
    }
  }
  
    if(gameOver) {
      fill('white');
      textSize(32);
      textFont(LifeSaversEB);
      push();
      stroke('saddlebrown');
      strokeWeight(3);
      text("Your cake is now ready!", width/2, height/2);
      strokeWeight(2);
      textSize(16);
      text("let's see how it goes...!", width/2, height/2 + 35);
      textSize(18);
      text("'R' to make a new cake", width/2, height/2 + 70);
      text("or 'Enter' to join the dinner party", width/2, height/2 + 100);
      pop();
      return;
  }
  
  //if the total number of layers is same with the max number for the layer, it's going to stop the catching part of the game
  if(layers.length >= maxLayers) {
    gameOver = true;
  }
}

function throwIngredient() {
  //falling ingredients in random colors from the array of colors from random x and y position inside the canvas area
  let ingredient = new Ingredient(random(width), 0, random(2,5), random(15,30));
  ingredients.push(ingredient);
}

function addLayer(color) {
  if(layers.length < maxLayers) {
    let layer = new PileLayer(color);
    layers.push(layer);
    //just count the number of the orange layer to know if it's going to be happy dinner party or sad dinner party for Elise
    if(color === 'orange') {
      orangeLayerCount++;
    }
  }
}

function cakePile() {
  //plate
  fill('burlywood');
  rect(width/2, pileY + 20, 420, 20, 10);
  fill('bisque');
  rect(width/2, pileY + 15, 480, 15, 10);
  
  for(let i = 0; i < layers.length; i++) {
    layers[i].display(i);
  }
}

class Ingredient {
  constructor(foodX, foodY, foodSpeed, foodSize) {
    this.x = foodX;
    this.y = foodY;
    this.speed = foodSpeed;
    this.size = foodSize;
    this.color = randomColor();
  }
  
  update() {
    this.y += this.speed;
  }
  
  display() {
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  
  catched(bx, by, bw, bh) {
    let ingredientL = this.x - this.size/2;
    let ingredientR = this.x + this.size/2;
    let ingredientT = this.y - this.size/2;
    let ingredientB = this.y + this.size/2;
    
    let bunnyL = bx;
    let bunnyR = bx + bw;
    let bunnyT = by;
    let bunnyB = by + bh;
    
    //to let the system know wheter I catched the ingredient or not
    return !(ingredientR < bunnyL || ingredientL > bunnyR || ingredientB < bunnyT || ingredientT > bunnyB);
  }
}

class PileLayer {
  //cake layers with the same color of the ingredients that I catched
  constructor(color) {
    this.color = color;
  }
  
  display(index) {
    fill(this.color);
    rect(width/2, pileY - index * 30, 400, 30);
  }
}

function randomColor() {
  let colors = ['green', 'red', 'white', 'orange'];
  return colors[floor(random(colors.length))];
}

function resetGame() {
  //reset all the arrays and game results that are stored in the system
  houses = [];
  ingredients = [];
  layers = [];
  
  gameOver = false;
  houseFound = false;
  
  protagonist = new Protagonist(30, 30, 20, 2);
  
  generateHouses();
  
  orangeLayerCount = 0;
  
  plating = false;
  
  cakeFailed = false;
}

function dinnerParty() {
  image(dinnerpartybg, width/2, height/2);
  textSize(18);
  fill('lightyellow');
  textFont(Pangolin);
  push();
  strokeWeight(2);
  stroke('saddlebrown');
  text("Put your cake on the plate", width/2, height - 30);
  pop();

  if (!plating) {
    cake.update();
  }

  cake.display();

  if (plating) {
    fill(255);
    textSize(10);

    //let system know how it's going to decide if the cake is successfully made or not based on the number of the orange color layers
    if (orangeLayerCount <= 3 && !cakeFailed) {
      //count the time to show messages in order
      cakeFailedTime = millis();
      cakeFailed = true;
    }

    //first show ugh, this cake is not good message
    if (cakeFailed && millis() - cakeFailedTime < 3000) {
      textFont(EmilyCandy);
      push();
      stroke('saddlebrown');
      strokeWeight(3);
      textSize(30);
      fill('gold');
      text("Ugh, this cake is not good!", width / 2, height / 2 + 20);
      pop();
      return; 
    } 
    else if (orangeLayerCount > 3) {
      textSize(30);
      fill('white');
      push();
      stroke('saddlebrown');
      strokeWeight(3);
      text("Wow! This cake is so good!", width / 2, height / 2 + 20);
      fill('ivory');
      strokeWeight(2);
      textFont(Pangolin);
      textSize(20);
      text("Press 'i' to decorate your cake!", width / 2, 40);
      pop();
      return;
    }
  }

  //after 3 seconds of time delay, the dinner party was not successful message is going to be shown
  if (cakeFailed && millis() - cakeFailedTime >= 3000) {
    textFont(EmilyCandy);
    textSize(30);
    fill('palegreen');
    push();
    stroke('saddlebrown');
    strokeWeight(3);
    text("Dinner Party was not successful!", width / 2, height / 2 + 20);
    textSize(18);
    strokeWeight(2);
    fill('white');
    textFont(Pangolin);
    text("'O' to see the party photo...", width/ 4, 40);
    textSize(18);
    fill('ivory');
    text("or 'R' to make a new cake", width/4*3, 40);
    pop();
    return;
  }

  //players can put the cake on the table with mouse
  if (dist(mouseX, mouseY, width/2, height/2) < 125 && mouseIsPressed && !plating) {
    cake.plated(width/2, height/2 - 3);
    plating = true;
  }
}

function icingCake() {
  image(icingbg, width/2, height/2);
  
  textFont(Pangolin);
  fill('ivory');
  textSize(18);
  push();
  strokeWeight(2);
  stroke('saddlebrown');
  text("Decorate cake and let's go to the party!", width/2, height/15);
  pop();
  icing.update();
  icing.display();
}

class ColorButton {
  //color palettes for the icing
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 30;
    this.color = color;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    //mark black circle on the color palette to know which color the player chose
    if (this.color === brushColor) {
      fill('black');
      circle(this.x, this.y, 10);
    }
  }

  squeeze() {
    //only squeezing one forcing bag of icing the black mark will disappear when the player clicks the other color on the palette
    return mouseX >= this.x - this.w/2 && mouseX <= this.x + this.w/2 && mouseY >= this.y - this.h/2 && mouseY <= this.y + this.h/2;
  }
}

class Brush {
  constructor() {
    this.drawing = false;
    this.shapes = [];
  }

  startDrawing() {
    this.drawing = true;
  }

  stopDrawing() {
    this.drawing = false;
  }

  draw() {
    //the color in the forcing bag should be the same color with the color that I chose on the color palettes
    if (this.drawing && !this.isMouseOverColorPalettes()) {
      this.shapes.push({
        x: mouseX,
        y: mouseY,
        color: brushColor
      });
    }
  }

  clear() {
    this.shapes = [];
  }

  display() {
    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      fill(shape.color);
      ellipse(shape.x, shape.y, brushSize, brushSize);
    }
  }

  isMouseOverColorPalettes() {
    for (let button of icing.colorButtons) {
      if (button.squeeze()) {
        return true;
      }
    }
    return false;
  }
}

class DrawingIcing {
  constructor() {
    this.colorButtons = [];
    this.brush = new Brush();
    this.setupColorButtons();
    this.colorPalettes();
  }

  setupColorButtons() {
    //color palettes on the right side of the canvas
    let colors = [
      'Lavender', 'Snow', 'Aquamarine', 'Chocolate',
      'PaleGoldenRod', 'Gold', 'OrangeRed', 'Plum',
      'LimeGreen', 'Wheat', 'pink'];
    let x = 530;
    let y = 30;

    for (let i = 0; i < colors.length; i++) {
      this.colorButtons.push(new ColorButton(x, y + i * 30, colors[i]));
    }
  }

  //finish and clear button for the icing part so players can erase the icing and do the job again if they are not satisfied and they can finish the cake to join the dinner party and see the photo
  colorPalettes() {
    if(currentScene === 5) {
      this.clearButton = createButton('Clear');
      this.clearButton.position(470, height - 50);
      this.clearButton.size(80, 40);
      this.clearButton.mousePressed(() => this.brush.clear());

      this.submitButton = createButton('Submit');
      this.submitButton.position(width / 2 - 40, height - 50);
      this.submitButton.size(80, 40);
      this.submitButton.mousePressed(() => this.submitDrawing());
    }
  }

  update() {
    if (mouseIsPressed) {
      this.chosen();
    }
    this.brush.draw();
  }

  display() {
    for (let i = 0; i < this.colorButtons.length; i++) {
      this.colorButtons[i].display();
    }
    this.brush.display();
    this.drawClearButton();
    this.drawSubmitButton();
  }

  chosen() {
    for (let button of this.colorButtons) {
      if (button.squeeze()) {
        brushColor = button.color;
        break;
      }
    }

    //erase the icing or finish icing on the cake
    if (mouseX >= 500 && mouseX <= 540 && mouseY >= height - 40 && mouseY <= height - 20) {
      this.brush.clear();
    }

    if (mouseX >= width/2 - 20 && mouseX <= width/2 + 20 && mouseY >= height - 40 && mouseY <= height - 20) {
      this.submitDrawing();
    } else {
      this.brush.startDrawing();
    }
  }

  //cuter buttons design to match with the overall aesthetics of the illustrations
  drawClearButton() {
    push();
    strokeWeight(2);
    stroke('saddlebrown');
    fill('lightyellow');
    rect(500, height - 30, 80, 30, 20);
    fill('ivory');
    textFont(LifeSaversEB);
    textSize(14);
    text("Clear", 500, height - 25);
    pop();
  }

  drawSubmitButton() {
    push();
    strokeWeight(2);
    stroke('saddlebrown');
    fill('lightyellow');
    rect(width / 2, height - 30, 80, 30, 20);
    fill('ivory');
    textSize(14);
    text("Finish", width / 2, height - 25);
    pop();
  }

  submitDrawing() {
    currentScene = 4;
  }
}

//when mouse is released, signature and icing is going to be paused
function mouseReleased() {
  icing.brush.stopDrawing();
  signature.stopDrawing();
}

function sadDinner() {
  image(sadbg, width/2, height/2);
  
  textFont(LifeSaversEB);
  fill('ivory');
  push();
  strokeWeight(2);
  stroke('saddlebrown');
  textSize(20);
  text("More carrots would have made the cake better...", width/2, height/8);
  textSize(16);
  text("Elizabeth was sad that you forgot what her favorite vegetable is...", width/2, height/8 + 30);
  textSize(20);
  text("'R' to make a new cake for her", width/2, height/8*7);
  text("or 'X' to go back to the main menu", width/2, height/8*7 + 30);
  pop();
  
  if(keyIsPressed) {
    if(key === 'r') {
      resetGame();
      currentScene = 1;
    } else if(key === 'x') {
      resetGame();
      currentScene = 6;
    }
  }
}

function happyDinner(){
  image(happybg, width/2, height/2);
  
  for(let i = 0; i < confettis.length; i++) {
    const confetti = confettis[i];
  
    image(confettiimg, confetti.x, confetti.y);
  
      if(confetti.y > height + 30) {
        confetti.y = -30;
      } else {
        confetti.y += random(0.5, 2);
      }
  }
  
  textFont(LifeSaversEB);
  fill('white');
  push();
  stroke('saddlebrown');
  strokeWeight(2);
  textSize(20);
  text("Thank you so much for coming to my party!", width/2, height/8);
  textSize(20);
  text("'X' to go back to the main menu", width/2, height/8*7)
  pop();
  
  if(keyIsPressed) {
    if(key === 'x') {
      resetGame();
      currentScene = 6;
    }
  }
}

function keyPressed() {
  if(key === 'r') {
    resetGame();
    currentScene = 1;
  }
  if(keyCode === ENTER && gameOver) {
    currentScene = 2;
  }
  if(key === 'o' && currentScene == 2 && plating && cakeFailed) {
    currentScene = 3;
  }
  if(key === 'p' && currentScene == 5 && plating && !cakeFailed) {
    currentScene = 4;
  }
  if(key === 'x' && currentScene == 9) {
    resetGame();
    currentScene = 6;
  }
  if(key === ENTER && currentScene == 2 && !cakeFailed) {
    currentScene = 5;
  }
  if(key === 'i' && currentScene == 2 && !cakeFailed) {
    currentScene = 5;
  }
  if(key === 'c') {
    currentScene = 9;
  }
}
  
class Cake {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  update() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  display() {
    image(completedCake, this.x, this.y);
  }
  
  plated(plateX, plateY) {
    this.x = plateX;
    this.y = plateY;
  }
}

function gameCredit() {
  image(credits, width/2, height/2);
  strokeWeight(3);
  stroke('saddlebrown');
  fill('gold');
  textSize(42);
  textFont(EmilyCandy);
  text("Created by", width/2, 70);
  
  strokeWeight(2);
  fill('white');
  textSize(22);
  textFont(LifeSaversEB);
  text("Seungyeon Lee | Developer", width/2, 160);
  text("Seungyeon Lee | Art", width/2, 200);
  
  textSize(20);
  fill('lightyellow');
  text("Thank you for playing! Have a nice dinner!", width/2, height/2 + 70);
  
  textSize(16);
  text("Go back to the start screen", width/2, 360);
  
  if(mouseX >= 150 && mouseX <= 450 && mouseY >= 350 && mouseY <= 370) {
    fill('gold')
    textSize(16);
    text("Go back to the start screen", width/2, 360);
  }
  
  image(cursorImage, mouseX, mouseY);
}
let img; 
/* let timestamp; */ 

function preload() { 
  img = loadImage('undcvrtest.jpg');
}

let words = ['END', 'OF', 'YEAR', 'SALE']
let wordCount = 4; 
let hue; 
let position; 

function setup() {
  describe ('undercover editorial');
  describe ('not so random words')
  textFont('Space Mono')
  createCanvas(1800, 1920);
  
  textAlign(CENTER); 
  colorMode(HSB);
  hue = random(300,255)
  frameRate(3)
  
  position = floor(random(0, words.length - wordCount));
  background(hue, 95, 95);
  
}

  function draw() { 
  background(225, 200,120); 
  image(img, 0, 0, width, height);
    
  for(let i = 0; i < 20; i++ ) { 
    textSize(random(100, 200)); 
    fill(hue, 40, random(300, 300)); 
    text(random(words), random(width), random(height));
    
  }
  
  
    
}

let newimg; 
/* let timestamp; */ 

function preload() { 
  img = loadImage('undcvrtest.jpg');
}

let newwords = ['END', 'OF', 'YEAR', 'SALE']
let newwordCount = 4; 
let newhue; 
let newposition; 

function setup() {
  describe ('undercover editorial');
  describe ('not so random words')
  textFont('Space Mono')
  createCanvas(1800, 1920);
  
  textAlign(CENTER); 
  colorMode(HSB);
  hue = random(300,400)
  frameRate(3)
  
  position = floor(random(0, words.length - wordCount));
  background(hue, 95, 95);
  
}

  function draw() { 
  background(225, 200,120); 
  image(img, 0, 0, width, height);
    
  for(let i = 0; i < 20; i++ ) { 
    textSize(random(100, 200)); 
    fill(hue, 40, random(300, 300)); 
    text(random(words), random(width), random(height));
    
  }
  
  
    
}
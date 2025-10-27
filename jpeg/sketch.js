let img; // Declare variable 'img'.

function preload() {
  img = loadImage('Antenna.jpg'); // Load image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 background (220)
imgage 0,0 ;


}

let hum; 
let img; 

function preload(){
  hum = loadSound("humm.wav");
  img = loadImage('Antenna.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0, 0, windowWidth, 500);
}

function mouseClicked(){
  hum.loop();
  hum.amp(0.2); 

  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
// Sketch by Shengfeng Gu, student number: 4813456
// I adapted the P5 drawing sketch, found here: https://editor.p5js.org/p5/sketches/ HyeH4xJmOQ 
// and put Vignelli's face under the dot... 'no dot no stop' 
// but for the rest pretty random and just for illustration purposes 
//comments below were in original sketch: 


let bg;
let like = [];

function preload() {
  bg = loadImage('source/horse_bg.jpg');

  like[0] = loadImage('source/like1.png');
  like[1] = loadImage('source/like2.png');
  like[2] = loadImage('source/like3.png');
  like[3] = loadImage('source/like4.png');
  like[4] = loadImage('source/like5.png');
  like[5] = loadImage('source/like6.png');
  like[6] = loadImage('source/like7.png');
  like[7] = loadImage('source/like8.png');
  like[8] = loadImage('source/like9.png');
}

function setup() {
  var cnv = createCanvas(800,600);
  cnv.parent('sketch-holder');
  image(bg, 0, 0, 800, 600);
}

function mousePressed() {
  var r = floor(random(0, 9));
  imageMode(CENTER);
  image(like[r], mouseX, mouseY, like[r].width/2, like[r].height/2);
}
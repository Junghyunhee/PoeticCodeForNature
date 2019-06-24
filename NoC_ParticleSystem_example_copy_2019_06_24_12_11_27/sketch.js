

let img1;
let particleSystem;

function preload() {
  img1 = loadImage('image/b.png');
    img2 = loadImage('image/g.png');
  img3 = loadImage('image/y.png');

}
function setup() {
  createCanvas(640, 360);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(255, 240, 135);
  particleSystem.addParticle();
  particleSystem.run();
    image(img1, mouseX, 300, 150,150);
  imageMode(CENTER);
  particleSystem.origin = createVector(mouseX, -10);

}
// function mouseDragged() {

   //particleSystem.addParticle();
   //console.log(e);
  //return false;
 //}

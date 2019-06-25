// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size
// list of particles.

// 참고가 되는 책 내용은 아래와 같습니다.
// https://natureofcode.com/book/chapter-4-particle-systems/


let img1;
let particleSystem;
function preload() {
  img1 = loadImage('image/s.png');
}
function setup() {
  createCanvas(640, 360);
  particleSystem = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(0);
  particleSystem.addParticle();
  particleSystem.run();
  image(img1, mouseX, mouseY, 200,200);
  imageMode(CENTER);
   particleSystem.origin = createVector(mouseX, mouseY);

}
let ball = [];





function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, [255]);
  gravity = createVector(0, 0.1);
  stroke(255)
  strokeWeight(1);
  for (let i = 0; i < 30; i++) {
    ball[i] = new Particle();
    
  }
}


function draw() {
  background(100, 0, 0, 25);
  for (var i = 0; i < 30; i++) {
    ball[i].show();
    ball[i].update();
    ball[i].isDead();
    if (mouseIsPressed) {
      ball[i].hold();
        
    }
  }

}
function mouseReleased() {
  for (let i = 0; i < 30; i++) {
    gravity = createVector(random(0.5, -0.5), random(-0.5, 0.5));
    ball[i].addForce(gravity);
    wind = createVector(random(-3, 3));
    ball[i].addForce(wind);
    
  }
 return false;
}
 
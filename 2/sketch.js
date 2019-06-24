
let movers = [];

let attractor;

function setup() {
  createCanvas(600, 600);
   background(0);
  for (let i = 0; i < 20; i++) {
    movers[i] = new Mover(random(0.5, 1), random(width-2), random(height-2));
  }
  attractor = new Attractor();
}

function draw() {

  attractor.display();

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}

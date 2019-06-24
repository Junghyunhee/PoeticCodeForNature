let img2;



class Particle {

  constructor(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-0.2,0.2), 0);
    this.position = position.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  // Method to display
  display() {
    stroke(255, this.lifespan);
    strokeWeight(2);
    fill(255, this.lifespan);
    image(img2, this.position.x, this.position.y, 30, 30);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}

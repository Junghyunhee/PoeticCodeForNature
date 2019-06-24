class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = color(random(1, 255), random(1, 255), random(1, 255));
    this.w = random(10,30);

   this.particles = [];
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width;
    }

    if (this.pos.x < 0) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = 0;
    }

    if (this.pos.y < 0) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = 0;
    }
  }

    hold(){
      this.pos.x = mouseX;
    this.pos.y = mouseY;
    this.acc.set(0,0);

  }

  show() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);

  }


 isDead() {
 if (this.pos.y > height || this.pos.x > width || this.pos.x < 0 || this.pos.y < 0)
 {
  this.c = 0;
      return true
    } else {
      return false;
    }
}

}

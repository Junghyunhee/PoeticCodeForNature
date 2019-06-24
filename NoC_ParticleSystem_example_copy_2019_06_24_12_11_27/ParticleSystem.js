// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class ParticleSystem {

  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    let r = random(2);
    if (r < 0.5) {
      this.particles.push(new Particle(this.origin));
    } else {
      this.particles.push(new Confetti(this.origin));
    }
  }

  run() {

    for (let particle of this.particles) {
      particle.run();
    }


    this.particles = this.particles.filter(particle => !particle.isDead());
  }
}

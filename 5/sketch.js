let ball;


function setup() {
 noFill();
  createCanvas(400, 400); 
  ball = new Walker();
}


function draw() {

  ball.update();
  ball.display();
}


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.pos = createVector(width/2, height/2);
  	this.w = random(0,100);
  }
  
  update() {
    //update position
  	this.pos.x = mouseX;
    this.pos.y = mouseY;
  }
  
  display() {
    //display walker
	ellipse(this.pos.x, this.pos.y, random(this.w));
  }
}
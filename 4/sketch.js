let ball=[];


function setup() {
  background(0);
  createCanvas(400, 400); 
 for (let i = 0; i < 100; i++) {
    ball[i] = new Walker();
    
  }
}


function draw() {
  for(let i = 0; i < ball.length; i++){
  ball[i].update();
  ball[i].display();
   
}
}

// new way to define Object
class Walker {
  //setup values
  constructor() {
    
  	this.x = width/2;
  	this.y = height/2;
  	this.w = random(10,50);
  }
  
  update() {
    //update position
  	this.x = this.x + random(-5, 5);
  	this.y = this.y + random(-5, 5);
   
  }
  
  display() {
    //display walker
	ellipse(this.x, this.y, this.w);
  }
}
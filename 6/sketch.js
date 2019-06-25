var t;

function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0, 15);
  noFill();
  t = 0;
}

function draw() {
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 400; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 200 * noise(i * 0.05, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;
 if (frameCount== 0) {
	background(255);
  }

}

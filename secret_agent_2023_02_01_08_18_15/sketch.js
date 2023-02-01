//setup runs once, draw runs over and over

function setup() {// function is box of code that does things that are connected 
  createCanvas(400, 400);//(width of canvas, height of canvas)
  background(150,20,50);
}
function draw() {
  noStroke()
  fill('purple')
  circle(mouseX, mouseY ,150)// x position x and the diameter
}

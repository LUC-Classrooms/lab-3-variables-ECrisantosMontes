/* Lab 3b - Declare Your Own Variables
 * Declare and use a variable in a P5 sketch
 * 
 */

//declare a global variable and assign it a number value on the next line:
var a = 200
var e = 100

function setup() {
  createCanvas(400, 300); // creates a drawing canvas
}

function draw() {
  // background is drawn first
  background(200, 230, 250); // ... not light gray
  stroke(150, 150, 205)
  fill(a, 150, 200)
  ellipse(a, 200, 50, 50)
  fill(200, 200, 250);
  ellipse(e, 150, 80, 40)
  // call a simple P5 drawing function, such as ellipse() using your new variable(s) in place of arguments
  
  
}

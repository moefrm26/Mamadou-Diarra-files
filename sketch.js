//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(73,195,23); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) 
  strokeWeight(5) // an RGB color for the circle's border
  fill(12,34,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(50,50,40,40); // center of canvas, 20px dia
  fill(12,34,77,244)
  rect(200,350,50,50)
  line(50,150,400,400)
  textSize(40)
  textFont("garamond")
  text('PARTY',250,200)
  ellipse(mouseX-30,mouseY-25,50,50)
  ellipse(random(width),random(height),25,25)

}

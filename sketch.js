const Engine = Matter.Engine;
const World = Matter.World;

//Matter.Bodies creates boideies like rectangle, sphere, etc
const Bodies = Matter.Bodies;

//Matter.Body gives the functions for Matter.Bodies
const Body = Matter.Body;

//creating a variable 'button'
var btn2;
var angle =60;

function setup() {
  createCanvas(400,400);

  //creating your own engine and world
  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  //creating the image for the button
  btn2 = createImg('up.png');

  //setting the position and size for the button 
  btn2.position(20,30);
  btn2.size(50,50);

  //mouseClicked is an inbuilt function
  btn2.mouseClicked(vForce);

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  //adding a rectangular body like a windmill to the world in the memory storage
  windmill = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,windmill);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  //function rotate is given to rotate the bodies given from Matter.Body
  Matter.Body.rotate(windmill,angle);
  
//the order always goes as: push - translate - rotate - body name - pop

//translate and rotate always have their origin as 0,0 in the canvas

  //function push is used to start the settings
  push ();

  //allow the body to rotate in its own position
  translate (windmill.position.x,windmill.position.y);

  rotate (angle);

  //body name
  rect(0,0,100,20);

  //function pop is used to stop the settings for other bodies (will only work on the rectangle, windmill)
  pop ();

  //angle is used to rotate the body in a particular angle
  angle+=0.1;

  ellipse(ball.position.x,ball.position.y,20);
  ellipseMode(RADIUS);

  rect(ground.position.x,ground.position.y,500,20);
  rectMode(CENTER);
 
console.log(ground.position.y);
 
}

function vForce()
{
  //apply force is one of the functions from Matter.Body
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

  //if we go against gravity (up), it is negative
  //if we go towards gravtational pull (down), it is positive
  //if we go towards the left of x axis, it is negative
  //if we go towards the right of x axis, it is positive
}
  
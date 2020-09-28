const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);

var balloptions={
  restitution:1.5
}



  ball=Bodies.circle(200,100,20,balloptions)
  World.add(world,ball)

  console.log(ground);
  console.log(ground.type)
}

function draw()
{
  background("blue");

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}
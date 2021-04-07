
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var paper
var lside
var bottom
var rside
var land

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  
	Engine.run(engine);

land=createSprite(400,400,800,40)
land.shapeColor="green"

paper= new Paper(400,10,10)  
lside= new Ground(550,321,20,120)
bottom= new Ground(625,370,170,20)
rside= new Ground(700,321,20,120)



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  bottom.display();
  lside.display();
  rside.display();

  paper.debug=true;

  drawSprites();

 
}




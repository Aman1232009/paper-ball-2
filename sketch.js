
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(200,500,20)
	ground = new Ground(10,690,800,20)
	dustbin = new Dustbin(600,600) 

  
}


function draw(){
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45})	
	}
}




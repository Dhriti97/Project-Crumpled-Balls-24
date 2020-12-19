
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustB1,dustB2,dustB3;
var dustB1body,dustB2body,dustB3body;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,670,800,20);

    dustB1=createSprite(460,620,20,80);
	dustB1.shapeColor="yellow";
	dustB2=createSprite(560,650,210,20);
	dustB2.shapeColor="yellow";
	dustB3=createSprite(670,620,20,80);
	dustB3.shapeColor="yellow";

	Engine.run(engine);
	
	
	dustB1body = Bodies.rectangle(460,620,20,80,{isStatic:true});
	World.add(world,dustB1body);

	dustB2body = Bodies.rectangle(560,650,210,20,{isStatic:true});
	World.add(world,dustB2body);

	dustB3body = Bodies.rectangle(670,620,20,80,{isStatic:true});
	World.add(world,dustB3body);

	paperObject = new paper(100,600,40);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  ground.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-5});
	}
}



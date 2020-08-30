
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const ApplyForce = Matter.applyForce;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    holder1 = new Holder(400,100,600,20,);
    holder2 = new Holder(300,100,100,20);
    holder3 = new Holder(200,100,100,20);
    holder4 = new Holder(500,100,100,20);
    holder5 = new Holder(600,100,100,20);


    bob1 = new Bob(200,500,80,20);
    bob2 = new Bob(300,500,80,20);
    bob3 = new Bob(400,500,80,20);
    bob4 = new Bob(500,500,80,20);
    bob5 = new Bob(600,500,80,20);
    chain = new Chain(bob1.body,holder3.body);
    chain2 = new Chain(bob2.body,holder2.body);
    chain3 = new Chain(bob3.body,holder1.body);
    chain4 = new Chain(bob4.body,holder4.body);
    chain5 = new Chain(bob5.body,holder5.body);

    //bob1.body.position.x = mouseX;
    //bob1.body.position.y = mouseY;
    keypressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  holder1.display();
  holder2.display();
  holder3.display();
  holder4.display();
  holder5.display();
  bob1.display();
  chain.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}

function keypressed(){

  if(keyCode === UP_ARROW){
    
  
    ApplyForce(bob1.body,bob1.body.position,{x:-85,y:-85})
  }
}




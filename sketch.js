
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree1, stone1,boy1;
var ground1, rope1;
var mango1,mango2,mango3,mango4,mango5,mango6;
var mango7,mango8, mango9,mango10;


function preload()
{
	
}

function setup() {
	createCanvas(1300, 615);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground (650,600,1300,20);
	tree1= new Tree (1050,300,500,600);
	boy1 = new Boy (250,480,200,250);

	mango1 = new Mango (900,180,50,5);
  //mango1.scale=0.5;
	mango2 = new Mango (970,150,30,30);
	mango3 =new Mango (1000,300,30,30);
	mango4 =new Mango (950,300,30,30);
	mango5 =new Mango (1030,130,30,30);
	mango6 = new Mango (1060,300,30,30);
	mango7 =new Mango (1080,150,30,30);
	mango8 = new Mango (1140,170,30,30);
	mango9 = new Mango (1140,320,30,30);
	mango10 = new Mango (1220,240,30,30);

	stone1 = new Stone (240,500,30,30);

	rope1=new Slingshot (stone1.body,{x:200,y:505})  





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground1.display();
  tree1.display();
  boy1.display();
  stone1.display();
  rope1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();


  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);
  detectCollision(stone1,mango9);
  detectCollision(stone1,mango10);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   rope1.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:200, y:505}) 
	 rope1.attach(stone1.body);
	}
}

function detectCollision(lstone, lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
  
}



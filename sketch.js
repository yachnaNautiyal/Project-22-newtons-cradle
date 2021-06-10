const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let world;
let engine;
var roof;
//Create multiple bobs, mulitple ropes variables
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options={
		isStatic:false,
		restitution:0.3,
		density:0.4,
		friction:0
	}

	roof = Bodies.rectangle(310,100,250,20,roof_options);
    World.add(world,roof);
	
	fill("blue");
	bob1 = Bodies.circle(223,200,25,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(272,200,25,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(318,200,25,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(364,200,25,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(410,200,25,bob_options);
	World.add(world,bob5);


	rope1 = Matter.Constraint.create({
		pointA:{x:223,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:400,
        stiffness:0.01
	});
	World.add(world,rope1);

	rope2 = Matter.Constraint.create({
		pointA:{x:272,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:400,
        stiffness:0.01
	});
	World.add(world,rope2);

	rope3 = Matter.Constraint.create({
		pointA:{x:318,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:400,
        stiffness:0.01
	});
	World.add(world,rope3);

	rope4 = Matter.Constraint.create({
		pointA:{x:364,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:400,
        stiffness:0.01
	});
	World.add(world,rope4);

	rope5 = Matter.Constraint.create({
		pointA:{x:410,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:400,
        stiffness:0.01
	});
	World.add(world,rope5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push()
  strokeWeight(5);
  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y);
  line(rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y);
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y);
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y);
  pop()

  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,25);
  ellipse(bob2.position.x,bob2.position.y,25);
  ellipse(bob3.position.x,bob3.position.y,25);
  ellipse(bob4.position.x,bob4.position.y,25);
  ellipse(bob5.position.x,bob5.position.y,25);

  keyPressed();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.6,y:-0.6})
	}
}

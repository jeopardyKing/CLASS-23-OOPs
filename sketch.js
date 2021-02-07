const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Aengine;
var Aworld;
var ground;
var box1,box2;


function setup() {
createCanvas(400,400);

// creating my own engine in reference to matter wngine
//adding world to engine
Aengine=Engine.create();
Aworld=Aengine.world;
 
//creating new object using box and ground class
box1= new Box(200,300,50,50);
box2= new Box(240,100,50,100);
ground=new Ground(200,390,400,20);



}

function draw() {

background(0);  

Engine.update(Aengine);

//calling display function of the class
box1.display();
box2.display();
ground.display(); 

}
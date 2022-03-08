var back
const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var engine;
  var world;
  var snow=[]



function preload(){
  back=loadImage("snow3.jpg")


}





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
}


function draw() {
  background(back);  
  Engine.update(engine);
  if(frameCount%5===0){
    snow.push(new Snow(random(10,750), 10,100));
   
  }
  for (var j = 0; j < snow.length; j++) {
    snow[j].display();
  }
}
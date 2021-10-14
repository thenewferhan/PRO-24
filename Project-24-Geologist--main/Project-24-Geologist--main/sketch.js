const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1,plane1,rubber1, iron1,stone1
var rubber2;rubber3,rubber4,rubber5,rubber6


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new plane(600,height,1200,20);
    hammer1 = new hammer(10,100);
    rubber1=new rubber(400,400,25);
    iron1=new iron(120,400);
    stone1=new stone(240,400);
    rubber2=new rubber(550,400,8);
    rubber3=new rubber(600,400,8);
    rubber4=new rubber(640,400,8);
    rubber5=new rubber(690,400,8);
    rubber6=new rubber(720,400,8);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane1.display();
    hammer1.display();
    rubber1.display();
    iron1.display();
    stone1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
}
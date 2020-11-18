const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbin.png");
}
function setup() {
    createCanvas(1200,600);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    wall1 = new DustBin(910,505,10,120);
    wall2 = new DustBin(962,565,20,10);
    wall3 = new DustBin(1016,505,10,120);
    paper = new Paper();
    ground = new Ground();

}

function draw() {

    background(240, 128, 128);
    Engine.update(engine);

    ground.display();
    paper.display();
    wall1.display();
    wall2.display();
    wall3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{
            x:74,
            y:-75
        });
    }
}

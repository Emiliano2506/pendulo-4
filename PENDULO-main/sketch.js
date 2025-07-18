const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, ball, rope;
var caja, caja1, caja2, caja3, caja4, caja5, caja6, caja7, caja8, caja9;

function setup(){
    createCanvas(1850, 950);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 600, 1200, 20);
    caja = new Box(500,50,70,70);
    caja1 = new Box(500,100,70,70);
    caja2 = new Box(500,150,70,70);
    caja3 = new Box(500,200,70,70);
    caja4 = new Box(500,250,70,70);
    caja5 = new Box(570,50,70,70);
    caja6 = new Box(570,100,70,70);
    caja7 = new Box(570,150,70,70);
    caja8 = new Box(570,200,70,70);
    caja9 = new Box(570,250,70,70);
    //rope = new Rope(250,300,250,50);
    ball = new Ball(0,0,100,100);
    rope = new Rope(ball.body, { x: 400, y: 175 });

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    caja.display();
    caja1.display();
    caja2.display();
    caja3.display();
    caja4.display();
    caja5.display();
    caja6.display();
    caja7.display();
    caja8.display();
    caja9.display();
    rope.display();
    ball.display();
}


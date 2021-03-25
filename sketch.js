const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9,box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25 ;

var polygon, polygon_img;

var ground;
var sling;
var world, engine;
var stand1, stand2;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    createCanvas(800,400);
    ground = new Ground(450,390,width,10);
    stand1 = new Stand(380,300,270,10);
    stand2 = new Stand(700,200,200,10);
     
    //level one
   box1 = new Box( 300,275,30,40);
   box2 = new Box( 330,275,30,40);
   box3 = new Box( 360,275,30,40);
   box4 = new Box( 390,275,30,40);
   box5 = new Box( 420,275,30,40);
   box6 = new Box( 450,275,30,40);
   box7 = new Box( 480,275,30,40);
   //level two
   box8 = new Box( 330,235,30,40);
   box9 = new Box( 360,235,30,40);
   box10 = new Box( 390,235,30,40);
   box11 = new Box( 420,235,30,40);
   box12 = new Box( 450,235,30,40);
   //level three
   box13 = new Box( 360,195,30,40);
   box14 = new Box( 390,195,30,40);
   box15 = new Box( 420,195,30,40);
   //top
   box16 = new Box( 390,155,30,40);

   //level three
   box17 = new Box( 639,140,30,40);
   box18 = new Box( 669,140,30,40);
   box19 = new Box( 699,140,30,40);
   box20 = new Box( 729,140,30,40);
   box21 = new Box( 759,140,30,40);
   //level two
   box22 = new Box( 669,120,30,40);
   box23 = new Box( 699,120,30,40);
   box24 = new Box( 729,120,30,40);
   //top
   box25 = new Box( 699,100,30,40);

   polygon = Bodies.circle(50, 200, 20);
   World.add(world, polygon);

   sling = new Sling(this.polygon, {x:100, y:50});
}

function draw(){
   background("lightblue");
    Engine.update(engine);
    fill("orange")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("blue")
    box13.display();
    box14.display();
    box15.display();
    fill("green") 
    box16.display();

    fill("orange")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("pink")
    box22.display();
    box23.display();
    box24.display();
    fill("blue")
    box25.display();
    
    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    sling.display();
    stand1.display();
    stand2.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode === 32){
        console.log("hello");
        sling.attach(this.polygon);
    }
}

    

 




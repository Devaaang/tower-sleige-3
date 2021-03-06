const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var score = 0;

function preload() {
  backgroundImg=loadImage("bg.png");
  getTime();

}

function setup() {
  createCanvas(1200,500);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(500,360,20,30);
  box2 = new YellowBox(520,360,20,30);
  box3 = new GreenBox(540,360,20,30);
  box4 = new RedBox(560,360,20,30);
  box5 = new GreenBox(580,360,20,30);
  box6 = new YellowBox(600,360,20,30);

  box7 = new RedBox(510,330,20,30);
  box8 = new YellowBox(530,330,20,30);
  box9 = new BlueBox(550,330,20,30);
  box10 = new GreenBox(570,330,20,30);
  box11 = new RedBox(590,330,20,30);

  box12 = new YellowBox(520,310,20,30);
  box13 = new BlueBox(540,310,20,30);
  box14 = new RedBox(560,310,20,30);
  box15 = new GreenBox(580,310,20,30);

  box16 = new YellowBox(530,280,20,30);
  box17 = new RedBox(550,280,20,30);
  box18 = new GreenBox(570,280,20,30);

  box19 = new BlueBox(540,250,20,30);
  box20 = new RedBox(560,250,20,30);

  box21 = new GreenBox(550,220,20,30);

  box22 = new GreenBox(800,205,20,30);
  box23 = new BlueBox(820,205,20,30);
  box24 = new YellowBox(840,205,20,30);
  box25 = new RedBox(860,205,20,30);
  box26 = new GreenBox(880,205,20,30);
  box27 = new YellowBox(900,205,20,30);

  box28 = new BlueBox(810,155,20,30);
  box29 = new RedBox(830,155,20,30);
  box30 = new YellowBox(850,155,20,30);
  box31 = new GreenBox(870,155,20,30);
  box32 = new RedBox(890,155,20,30);

  box33 = new YellowBox(820,125,20,30);
  box34 = new BlueBox(840,125,20,30);
  box35 = new RedBox(860,125,20,30);
  box36 = new GreenBox(880,125,20,30);
  
  box37 = new YellowBox(830,105,20,30);
  box38 = new BlueBox(850,105,20,30);
  box39 = new GreenBox(870,105,20,30);

  box40 = new RedBox(840,75,20,30);
  box41 = new YellowBox(860,75,20,30);

  box42 = new BlueBox(850,55,20,30);

  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(550,390,200,20);

  groundHovering = new Platform(850,220,200,20);
  
}

function draw() {
   //if (backgroundImg)
    background( backgroundImg);

  Engine.update(engine);  

  textSize(30);
  fill("red");
  text ("Score : " + score,width-300,100);

 
  
   

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();

    box21.display();
  
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

    box33.display();
    box34.display();
    box35.display();
    box36.display();

    box37.display();
    box38.display();
    box39.display();

    box40.display();
    box41.display();

    box42.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();

    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();

    box12.score();
    box13.score();
    box14.score();
    box15.score();

    box16.score();
    box17.score();
    box18.score();

    box19.score();
    box20.score();

    box21.score();
  
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();

    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();

    box33.score();
    box34.score();
    box35.score();
    box36.score();

    box37.score();
    box38.score();
    box39.score();

    box40.score();
    box41.score();

    box42.score();

    ball.display();
    spring.display();
    ground.display();
    groundHovering.display();

  }

  

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}

function keyPressed(){
  if(keyCode === 32){
    spring.attach(ball.body);
  }

 
}

async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var JSON1 = await response.json();
  var datetime = JSON1.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if (hour>= 06 && hour<= 19) {
      bg = "bg.png";
  }
  else {
      bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);

  console.log(backgroundImg);
}
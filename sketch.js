var bunny;
var carrot;
 var brick1;
var brick2;
 var brick4;


 var brick7;
 var brick8;
 var brick9;
 var brick10;
var snakeGroup;
var bg, bgimage;
var bunnyimg;
var carrotimage;
var snakeimage;


function preload(){
  bgimage=loadImage("bg2.jpg")
  bunnyimg=loadImage("images/bunnyImg.png")
  carrotimage=loadImage("images/carrot.png")
  snakeimage=loadImage("images/snake.png")
}

function setup() {
  createCanvas(600,600);
  bg=createSprite(300,301)
  bg.addImage(bgimage)
  bg.scale=0.9
  bunny=createSprite(40,550,10,10);
  bunny.addImage(bunnyimg)
  bunny.scale=0.5
  carrot=createSprite(550,60,30,30);
  carrot.addImage(carrotimage)
  carrot.scale=0.2
  brick1=createSprite(0,400,150,15);
 brick2=createSprite(255,400,90,15);
 brick3=createSprite(470,400,90,15);
 brick4=createSprite(650,400,90,15);
 brick7=createSprite(0,450,90,15);
 brick8=createSprite(255,450,90,15);
 brick9=createSprite(470,450,90,15);
 brick10=createSprite(650,450,90,15);
 
  bunny.shapeColor="purple"
  carrot.shapeColor="cyan"
   brick1.shapeColor="blue"
   brick2.shapeColor="red"
   brick3.shapeColor="blue"
   brick4.shapeColor="red"
 
  brick7.shapeColor="blue"
   brick8.shapeColor="red"
   brick9.shapeColor="blue"
   brick10.shapeColor="red"
 
  snakeGroup= new Group
}

function draw() {
  background("black");  
  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(brick1)){
     bunny.x=40;
   bunny.y=550;
  }
 if(bunny.isTouching(brick2)){
   bunny.x=40;
   bunny.y=550;
  }
  if(bunny.isTouching(brick3)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick4)){
    bunny.x=40;
    bunny.y=550;
  }
 
  if(bunny.isTouching(brick7)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick8)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick9)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick10)){
    bunny.x=40;
    bunny.y=550;
  }
  
if(bunny.isTouching(carrot)){
  text("You Win",200,200);
}
generateSnakes()
for(var i=0 ; i<snakeGroup.length ; i++){
  var temp=snakeGroup.get(i)
  if(bunny.isTouching(temp)){
    bunny.x=40;
    bunny.y=550;
    temp=null
  }
}



  drawSprites()
}
function generateSnakes(){
  if(frameCount%30===0){
    console.log(frameCount)
    var snake=createSprite(600,random(70,460),random(30,120),5)
    snake.addImage(snakeimage)
    snake.scale=random(0.3,0.6)
    snake.shapeColor="green"
    snake.velocityX=random(-4,4)
    snakeGroup.add(snake)
  }
}

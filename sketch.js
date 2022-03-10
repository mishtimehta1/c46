var gameState="start";
function preload(){
  bgImg=loadImage("greyImg.webp");

}

function setup(){
  createCanvas(400,600)
 // start=createButton("Start");
 // start.position(175,520);
 // start.class("startButton");
 start=createSprite(200,550,50,50);
 
  
  
 
}

function draw(){
  background("white")
  //start.mouseClicked(gamePlay);
  if(mousePressedOver(start)&&gameState==="start"){
    gameState="play";

  }
  if(gameState==="play"){
gamePlay();
  }
drawSprites();
}
function gamePlay(){
  start.visible=false;
  bg=createSprite(200,300);
  bg.addImage(bgImg);
  bg.velocityY=-2;
  //if(bg.y>600){
    //console.log("resetting");
  //  bg.y=bg.height/2;
  //}
}

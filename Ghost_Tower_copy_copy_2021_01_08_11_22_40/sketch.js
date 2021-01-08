//var
var ghost,ghostI_j,ghostI_s;

var music;
var tower,towerImg;

var door,doorI;
var climber,climberI;
var invisblock;

var gamestate = "play";

function preload(){
  
  ghostI_j=loadImage("ghost-jumping.png");
  ghostI_s=loadImage("ghost-standing.png");
  
  doorI=loadImage("door.png");
  
  climberI=loadImage("climber.png");
  
  towerImg=loadImage("tower.png");
}

function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY=-1;
  
   
  
  
  ghost =createSprite(200,200,50,50);
  ghost.addImage(ghostI_s);
  ghost.scale=0.3;
}


function draw(){
  background(0);
  //music.play(),true;
  
    spawndoor();
  
  drawSprites();
}

function spawndoor(){
  if (frameCount%240===0){
  door =createSprite(200,-150);
  climber =createSprite(200,10);
  invisblock = createSprite(200,15);
  
  
  door.x= Math.round(random(120,400));
  climber.x= door.x;
  invisblock.x=door.x;
 
  
  door.velocityY=1;
  climber.velocityY=1;
  invisblock.velocityY=1;
  
  invisblock.visble=false;
  }
}
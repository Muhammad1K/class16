
var trex ,trex_running;
var ground
var groundImage
var magicGround
var cloud
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")  
groundImage=loadImage("ground2.png")
cloudImage=loadImage("cloud.png")

}

function setup(){
  createCanvas(600,300)
  
  //create a trex sprite
 trex=createSprite(50,180,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(200,180,400,20)
 ground.addImage("ground",groundImage)
 magicGround=createSprite(200,190,400,10)
 magicGround.visible=false
 obstacesGroup=new Group()
 cloudsGroup=new Group()
}

function draw(){
  background("white")
  if(keyDown("space")){
trex.velocityY=-8
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(magicGround)
  ground.velocityX=-5
  spawnCloud()
  drawSprites()

}
function spawnCloud(){

if(frameCount%60==0){
  cloud=createSprite(600,100,40,10)
  cloud.velocityX=-5
  cloud.addImage("cloud",cloudImage)
  cloud.scale=0.75
  cloud.y=Math.round(random(10,60))
  cloud.lifetime=120
  cloudsGroup.add(cloud)
}
}

var bImage, obstacleImage, monkey, monkeyImage, backGround, backGroundA;
var obstacleGroup;
var score=0;

function preload(){
  
  monkeyImage=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png.", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bImage=loadImage("banana.png");
  
  obstacleImage=loadImage("stone.png");
  
  backGroundA=loadAnimation("jungle.jpg");
}

function setup() {
  createCanvas(400, 400);
  
  monkey=createSprite(350, 100, 10, 10);
  
  backGround=createSprite(200, 200, 10, 10);
  
  backGround.velocityX=3;
  
}

function draw() {
  background(220);
  
  text("Score:"+score, 100, 340);
  
  if(background.x>200){
    background.x=200;
  }
  
  if(foodGroup.isTouching(monkey)){
    score=score+2;
    foodGroup=destroyEach();
    
    switch(score){
      case 10: monkey.scale=0.12;
        break;
        case 20: monkey.scale=0.14;
        break;
        case 30: monkey.scale=0.16;
        break;
        case 40: monkey.scale=0.18;
        break;
        default: break;
    }
  }
  if(obstaclesGroup.isTouching(monkey)){
    player.scale=0.2;
  }
  
  
  monkey.addAnimation("Monkey_01","Monkey_02","Monkey_03","Monkey_04","Monkey_05", "Monkey_06", "Monkey_07","Monkey_08", "Monkey_09", "Monkey_10");

  
  obstacleImage.addImage("stone");
  
  backGround.addAnimation("jungle.png");
  
}
function createFood(){
  if(World.frameCount % 80===0){
    var banana=createSprite(400,randomNumber(140, 200));
    banana.addImage("banana");
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=100;
    foodGroup.add(banana);
  }}
function createObstacles(){
  if(World.frameCount % 300===0){
    var obstacles=createSprite(400, 310, 10, 10);
    obstacles.addAnimation("Stone");
    obstacles.scale=0.1;
    obstacles.velocityX=-4;
    obstacles.lifetime=100;
    obstaclesGroup.add(obstacles);
  }
}

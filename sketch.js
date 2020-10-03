
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(50,453,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground= createSprite(200,485,1200,10);
  ground.x= ground.width/2;
  ground.velocityX = -3;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");

  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
  if(keyDown("space")){
    monkey.velocityY = -15;
    }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival time:"+ survivalTime,100,50);
  
  SpawnBanana();
  SpawnObstacle();
  
  drawSprites();
}

function SpawnBanana(){
  if(frameCount%80===0){
   var banana  = createSprite(600,300,20,20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1
    banana.velocityX= -3;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}

function SpawnObstacle(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,460,20,20);
   obstacle.addImage(obstacleImage);
    obstacle.x = Math.round(random(120,200));
    obstacle.scale = 0.1
    obstacle.velocityX= -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
 }
}
   
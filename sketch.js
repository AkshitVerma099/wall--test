var bullet
var wall
var speed, weight
var thickness

function setup() {


  createCanvas(1400, 1400);
  weight = random(30,50)
  speed = random(20,50)
  thickness = random(10,20)
  createCanvas(1500,800);
  bullet = createSprite(100, 350, 100, 50);
  bullet.shapeColor = "blue"
  bullet.velocityX = speed
  
  wall = createSprite (1400,600,100,1400)
  wall.shapeColor = color("red");
  
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
}

function draw() {
  background(255,255,255);  

    text("speed:" + round(speed),20,10)
    text("weight:"+round(weight), 20,30)
    
    
    
    if(isTouching(bullet, wall)){
      
      text("damage:" + round(damage),20,50)
    }
    
    
      
    
if(damage < 5){
  wall.shapeColor = "green"
}
    
if(damage => 5){
  wall.shapeColor = "red"
}   
  
  drawSprites();
}


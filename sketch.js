var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  background("yellow")
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("yellow"); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
    bullet.depth = 10;
    
  }
  if(damage>10)
  {
    bullet.shapeColor = color(255,0,0)
  }

  if(damage<10){
    bullet.shapeColor = color(0,255,0)
  }

  
  drawSprites();
}
function hasCollided(bullet,wall)
{
var bulletRightEdge = bullet.x + bullet.width;
var wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
else{
 return false 
}
}
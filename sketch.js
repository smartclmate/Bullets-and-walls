
var thickness;
var bullet;
var wall;
var bulletRightEdge;
var wallLeftEdge;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(223,312));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));
  
  
  bullet=createSprite(90, 200, 90, 40);
  bullet.shapeColor=("white");

 
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  drawSprites();
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
    wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
 
    
    
  drawSprites();
}
function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;

}

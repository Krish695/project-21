var wall,t,l,b,speed,weight
function setup() {
  createCanvas(1600,400);
  speed=random (223,321)
  weight=random(30,52)
  t=random (22,23)
  b=createSprite(50, 200, 50, 5);
  b.velocityx=speed
  b.shapecolor="black"

  wall=createSprite(1200,200,t,height/2)
  wall.shapecolor="green"


 
}

function draw() {
  background("yellow");  
  if (hascollided (b,wall)){
    b.velocityx=0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if (damage> 10){
      wall.shapecolor=("red")
    }
    if (damage< 10){
      wall.shapecolor=("green")
    }
  }
  drawSprites();
}

function hascollided(b,wall1){
  var bulletedge=b.x+b.width
  var walledge=wall1.x
  if (bulletedge>= walledge){
    return true
  }
  return false
}
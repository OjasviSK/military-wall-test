var bullet, wall;
var thickness;
var  weight=272;
var speed=50;
function setup() {
  createCanvas(800,400);

  thickness=random(9,100);
  
  wall=createSprite(650,200,thickness,100);
  bullet=createSprite(0,200,50,10);

  wall.shapeColor="white";
  bullet.shapeColor="white";

  bullet.velocityX=50;


}
function draw() {
  background("black");  

  if(whenHit(wall,bullet)){
    bullet.velocityX=0;
    
    var damage = 0.5*272*50*50/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="red";
    }else{
      wall.shapeColor="green";
    }
 
  }

  drawSprites();
}

function whenHit(wall,bullet){

  if(wall.x-bullet.x<bullet.width/2+wall.width/2){

    return true
 }
  
}
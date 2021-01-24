var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  wall=createSprite(1500,200,60,height/2)
}

function draw() {
  background(255,255,255);
  
  function bounceOff(p1,p2){

    if(p1.x-p2.x<p2.width/2+p1.width/2
       && p2.x-p1.x<p2.width/2+p1.width/2
       && p1.y-p2.y<p2.height/2+p1.height/2
       && p2.y-p1.y<p2.height/2+p1.height/2)
    {

          return true;
  }

  else{

    return false;
  }
}
  drawSprites();
}
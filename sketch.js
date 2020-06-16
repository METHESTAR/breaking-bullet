var speed;
var weight;
var car,deformation,wall;



function setup() {
  createCanvas(1600,400);
  wall= createSprite(1400, 200, 50, 100);
  car=createSprite(50,200,50,50);
  car.shapeColor=("white");
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(0);  
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=weight*speed*0.5*speed/22509;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100 ){
      car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
  
}
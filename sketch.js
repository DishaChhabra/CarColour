function setup() {
  createCanvas(800,400);
  wall = createSprite(760, 200, 30, 200);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(90,200,30,30);
  car.velocityX = speed;
  car.shapeColor = "white";
}

function draw() {
  background("black");
  
  if(isTouching(car,wall)){
    car.velocityX = 0;
    deformation = 0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor = "red";
    } else if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    } else if(deformation<100){
      car.shapeColor = "green";
    }
  } 
  
  drawSprites();
}
//creating variables
var car, wall;
var speed, weight;

//creating function setup
function setup() 
{
  //creating canvas
  createCanvas(1000,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  //creating sprite
  car = createSprite(50, 200, 100, 50);
  wall = createSprite(940, 200, 30, 350);

  //setting car's velocity
  car.velocityX = speed;

  //giving car a color
  car.shapeColor = "white";

  //setting color of wall
  wall.shapeColor = (80, 80, 80);
}

//creating draw function
function draw() 
{
  //creating background
  background(0, 0, 0);  

  //detecting collision of car with the wall
  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    //setting velocity for car
    car.velocityX = 0;

    //creating varianble deformation
    var deformation = 0.5 * width * speed * speed / 22500;

    if (deformation > 180)
    {
      car.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100)
    {
      car.shapeColor = color(0, 255, 0);
    }

  }

  //displaying sprites
  drawSprites();
}
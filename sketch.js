var car,carImg,carRed,carYellow,carGreen,wall;
var weight,speed,deformation;

function preload(){
    //to load image of car
    carImg=loadImage("car.jpg");

    carRed=loadImage("red car.jpg");
    carYellow=loadImage("yellow car.jpg");
    carGreen=loadImage("green car.jpg");
}

function setup(){
    createCanvas(800,400);

    //to create sprite for car
    car=createSprite(100,200);
    car.addImage('CAR',carImg);
    car.scale=0.7;
    car.width=270;
   /* car.addImage('RED CAR',carRed);
    car.addImage('YELLOW CAR',carYellow);
    car.addImage('GREEN CAR',carGreen);*/
    car.velocityX=4;

    //to create a wall
    wall=createSprite(750,200,20,100);
    wall.shapeColor="brown";

    //to check deformation
    weight=random(500,3500);
    speed=random(40,80);
    deformation=weight/2*speed*speed/22500;
}
    

function draw(){
    background("white");

    //to check collision
    if(wall.x-car.x<wall.width/2+car.width/2){
        car.velocityX=0;
        
        if(deformation>180){
            car.addImage("RED CAR",carRed);
            car.changeImage("RED CAR",carRed);
            car.scale=0.9;
            fill("red");
            textSize(20);
            text("car is not safe",100,100);
        }

        if(deformation<180 && deformation>80){
            car.addImage("YELLOW CAR",carYellow);
            car.changeImage("YELLOW CAR",carYellow);
            car.scale=0.9;
            fill("yellow");
            textSize(20);
            text("car is almost safe",100,100);
        }

        if(deformation<80){
            car.addImage("GREEN CAR",carGreen);
            car.changeImage("GREEN CAR",carGreen);
            car.scale=0.9;
            fill("green");
            textSize(20);
            text("car is very safe",100,100);
        }

    }

    else{
        car.velocityX=4;
    }

    drawSprites();
}
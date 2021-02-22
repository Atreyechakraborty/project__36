var dog,sadDog,happyDog;
var feed,addFood;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milk=loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,200,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed= createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)

  addFood= createButton("Add Food")
  addFood.position(800,95) 
  
  milkBottle= createSprite(40,150,20,20);
  milkBottle.addImage(milk);
  milkBottle.scale=0.15 
  
  milkBottle1= createSprite(90,150,20,20);
  milkBottle1.addImage(milk);
  milkBottle1.scale=0.15

  milkBottle2= createSprite(140,150,20,20);
  milkBottle2.addImage(milk);
  milkBottle2.scale=0.15

  milkBottle3= createSprite(190,150,20,20);
  milkBottle3.addImage(milk);
  milkBottle3.scale=0.15

  milkBottle4= createSprite(240,150,20,20);
  milkBottle4.addImage(milk);
  milkBottle4.scale=0.15
}
 
function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){ 
  dog.addImage(happyDog);
  milkBottle4.x= 700;
  milkBottle4.y=200;

 
}

//function to add food in stock

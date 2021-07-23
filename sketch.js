var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg,orangeImg,redImage;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  orangeImg=loadImage("orangeLeaf.png")
  redImage=loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(150,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  var select_sprites = Math.round(random(1,2));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else {
      createOrange();
    }
  }
  drawSprites();

  
}
function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY=3;
apple.lifetime=140;
}
function createOrange(){
  orange = createSprite(random(50,350),40,10,10);
  orange .addImage(orangeImg);
  orange .scale=0.07;
  orange .velocityY=3;
  orange .lifetime=140;
  }







  

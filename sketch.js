var garden, cat, mouse, catImg, mouseImg, gardenImg;

function preload() {
  catImg = loadImage("cat1.png");
  mouseImg = loadImage("mouse1.png");
  gardenImg = loadImage("garden.png");
}

function setup(){
  createCanvas(600,600);
  garden = createSprite(600, 600);
  garden.addImage(gardenImg);

}

function draw() {
  background(255);
  
  
  
  
  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

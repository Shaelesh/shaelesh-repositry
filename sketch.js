var box 
function setup() {
  createCanvas(400,700);
  box=createSprite(100,200,40,40);
}

function draw() 
{
  background("blue");
  if(keyDown(DOWN_ARROW)){
  box.position.y=box.position.y+1
  }
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+1
  }
  if(keyDown(LEFT_ARROW)){
    box.position.y=box.position.y-1
  }
drawSprites();
}





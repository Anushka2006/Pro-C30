class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width, height);
    //this.image = loadImage("sprites/enemy.png");
    this.visibilty=255;
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed<3){

      super.display();
    }
   else{
    
    World.remove(world,this.body)
    push();
    this.visibility= this.visibility-5;
    tint(255, 0,170, this.visibility);
    rect(0,0,this.width, this.height);
    pop();
   }
  }

};



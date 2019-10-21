class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.imprisonmentchain=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var pla = [this.body.position.x,this.body.position.y];
    this.imprisonmentchain.push(pla);
    }
   
    for(var i = 0;i<this.imprisonmentchain.length;i++){
      image(this.smokeimage,this.imprisonmentchain[i][0],this.imprisonmentchain[i][1])
    }
  }
}

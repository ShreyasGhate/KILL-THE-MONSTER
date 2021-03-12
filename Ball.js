class Ball {
    constructor(x, y, width, height) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("clipart3356.png");
      World.add(world, this.body);
    }
  
    display() {
        var ballpos=this.body.position;
      push();
      translate(ballpos.x,ballpos.y-100);
      
      imageMode(CENTER);
			image(this.image, 0,150,200,200)

      pop();
    }
  }
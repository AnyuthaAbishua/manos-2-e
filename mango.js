class Mango{
    constructor(x, y, radius) {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1
        }
        this.body = Bodies.circle (x,y,radius,options)
        this.radius = radius;
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.radius);
        pop();
      }
}
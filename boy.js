class Boy{
    constructor(x, y, width, height) {
        var options = {
            'friction':1,
            'density':1,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/boy.png");
        World.add(world, this.body);
      }
      display(){
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
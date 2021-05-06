class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.007,
            length: 1
        }
        //this.bodyA= bodyA;
        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    attach(body){
        this.slingshot.bodyA=body;
    }

    fly(){
        this.slingshot.bodyA=null;
    }


    display(){
        if(this.slingshot.bodyA){
            
            var bodyA=this.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(2);
            stroke("red");
            //line(bodyA.x,bodyA.y,pointB.x,pointB.y);
            line(bodyA.x,bodyA.y,pointB.x,pointB.y);
            pop();
        }
    }
    
}
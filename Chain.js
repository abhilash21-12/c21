class Chain{
    constructor(bodyA,bodyB){
        var options={
            stiffness : 0.3,
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,


            
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
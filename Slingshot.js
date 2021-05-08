class Slingshot {

    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:20,
            stiffness:0.04
        }

        this.chain = Constraint.create(options)
        World.add(world,this.chain)
    }


    display(){
        push();
        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;
        strokeWeight(5);
        line (point1.x, point1.y, point2.x, point2.y);
        pop();

    }
}
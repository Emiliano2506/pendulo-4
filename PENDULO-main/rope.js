class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:340,
            density:40,
        }
        this.rope = Constraint.create(options);
        /*this.pointAx = pointAx;
        this.pointAy = pointAy;
        this.pointBx = pointBx;
        this.pointBy = pointBy;*/
        this.bodyA  = bodyA;
        this.pointB = pointB;
        World.add(world, this.rope);
    }

    display(){
        /*var pointAy, pointBy, pointBx,pointAx;
        pointBx = this.rope.pointB.positionx.x;
        pointAx = this.rope.pointA.position.x;
        pointAy = this.rope.pointA.position.y;
        pointBy = this.rope.pointB.position.y;*/
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
                stroke("white");
                strokeWeight(3);
                line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
}
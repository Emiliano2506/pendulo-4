class Box{
    constructor(x,y,z,a){
        var options = {
            restitution: 0.8, friction:0.5, density:5,
        }
        this.body = Bodies.rectangle(x,y,z,a,options);
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = a;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("red");
        strokeWeight(7);
        stroke('white');
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}
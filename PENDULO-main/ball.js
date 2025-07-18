class Ball{
    constructor(x,y,z,r){
        var options = {density:200, frictionAir:0.005,};
        this.body = Bodies.rectangle(x,y,z,r,options);
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        push()
        fill("golden")
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,this.z,this.r);
        pop()
    }
}

/*class Ball{
    constructor(x,y,z,r){
        //var options{}
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
    }

    display(){
        push()
        fill("golden")
        ellipse(this.x,this.y,this.z,this.r);
        pop()
    }
}*/
class Plinko {
    constructor(x,y,r){
        var options ={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.pbody = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.pbody);
    }
    display(){
        var pos = this.pbody.position;
        var angle = this.pbody.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}
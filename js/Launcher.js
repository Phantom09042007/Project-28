class Launcher{
    constructor(body1,point){
        var options = {
            bodyA: body1,
            pointB: point,
            length: 10,
            stiffness:0.003
        }
        this.point = point;
        this.Launcher = Constraint.create(options);
        World.add(world,this.Launcher);

    }

    display(){
        if (this.Launcher.bodyA){
            var objectA = this.Launcher.bodyA.position;
            var objectB = this.point
            strokeWeight(5);
            line(objectA.x,objectA.y,objectB.x,objectB.y);
        }
    }

    detach(){
        this.Launcher.bodyA = null;
    }

    attach(body){
        this.Launcher.bodyA = body;
    }
}
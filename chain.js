class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.2,
            length:50,
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
    strokeWeight(10)
    stroke("brown")
    var ropeA = this.chain.bodyA.position
    var ropeB = this.chain.bodyB.position
    line(ropeA.x,ropeA.y,ropeB.x,ropeB.y)

    }

    
}
//bodyA = bird,bodyB = log
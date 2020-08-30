class Bob {
    constructor(x,y,width,height,options){
        var options = {
            isStatic :true,
            restitution:0.3,
            friction :1.0,
            density : 2.0,
        }
        this.body = Bodies.rectangle(x,y,2,1,options)
        World.add(world,this.body)
    }
    
    
    
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
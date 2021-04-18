class Dustbin{
    constructor(x,y)
    {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
    this.thickness = 20;
    this.angle = 0;
    this.boxLeftBody = Bodies.rectangle(this.x-90,this.y,this.thickness,this.height,{isStatic:true});
    World.add(world,this.boxLeftBody);
    this.boxRightBody = Bodies.rectangle(this.x+90,this.y,this.thickness,this.height,{isStatic:true});
       World.add(world,this.boxRightBody);
       this.boxBottomBody=Bodies.rectangle(this.x,this.y+60,this.width,this.thickness,{isStatic:true});
       World.add(world,this.boxBottomBody);
       Matter.Body.setAngle(this.boxRightBody,-1*this.angle)
       Matter.Body.setAngle(this.boxLeftBody,this.angle)
       this.image = loadImage("dustbingreen.png");
  
    }  
    display(){
        var posLeft=this.boxLeftBody.position;
        var posBottom=this.boxBottomBody.position;
        var posRight=this.boxRightBody.position;

        push()
        translate(posRight.x,posRight.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        rotate(this.angle)
        fill("blue")
        rect(0,0,this.thickness,this.height )
        pop()  

        push()
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER)
        image(this.image,0,0,this.thickness,this.height)
        angleMode(RADIANS)
        rotate(-1*this.angle)
        fill("blue")
        rect(0,0,this.thickness,this.height)
        pop()  

        push()
        translate(posBottom.x,posBottom.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("blue")
        rect(0,0,this.width,this.thickness)
        pop()  
    }
  };
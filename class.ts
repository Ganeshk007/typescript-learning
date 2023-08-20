class Point {

    constructor(private x?:number,public y?:number, public z?:number){
        
    }

    private draw = ():any => {
        console.log('X:'+this.x+'Y:'+this.y+'Z:'+this.z);
    }

    drawRectangle = ():any => {
        this.draw();
    }

    get _x(){
        return this.x;
    }

    set _x(value){
        this.x = value;
    }
}

let shape = new Point(5,10,15);
shape.drawRectangle();

// let shape2 = new Point(6,12,18);
// shape2.draw();


//Accesors:
// getter
// setter
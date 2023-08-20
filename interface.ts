interface Point {
    x:number,
    y:number,
    z:number,
    draw:() => void
}

// let draw = (point:Point) => {
//     //...
// }

let drawRectangle = (point:Point) => {
    //...
}


//this s an interface so no methods defined in it, so created new function. this is solved by class
let someFunction = () => {

}

drawRectangle({x:3,y:4,z:6, draw: someFunction});
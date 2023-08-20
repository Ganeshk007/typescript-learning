let a: number;
let b: string;
let c: boolean;
let d: any;

let e: number[] = [1, 2, 3];
let f: any[] = [1, "a", true];


enum Color { Red = 1, Blue = 2, Green = 3 };
let backgroundColor = Color.Green;



//Type Assertions:
let color;
color = 'red';

let charAt = (<string> color).charAt(2);
let alternativeCharAt = (color as string).charAt(3);
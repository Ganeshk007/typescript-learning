//basic function for var
function doSomething() {
    for (var i=0; i<5; i++) {
        console.log(i);
    }

    console.log("Finally:",i); // 5
}


//basic function for let
function doSomething2() {
    let i=0;
    for (let i=0; i<5; i++) {
        console.log(i);
    }

    console.log("Finally:",i); // 0
}

doSomething();
doSomething2();

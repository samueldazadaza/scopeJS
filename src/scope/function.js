//VIDEO 4 -- scope local dentro de función
const fruits = () => {
    var fruit = 'APPLE';
    console.log(fruit);
};

fruits();
console.log(fruit);

//
const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();
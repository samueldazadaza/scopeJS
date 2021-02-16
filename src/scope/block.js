//VIDEO 5 -- scope en bloque de codigo
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    
    }
    console.log(fruits1);
};

fruits();

//otro ej
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

//otro ej2
const anotherFunction = () => {
    for (let i = 0; i < 10; i++) { //no funciona con var, si con let
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();
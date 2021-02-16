//CURSO 1
var hello = 'HELLO';
var hello = 'Hello ++'
let world = 'hello world';
let world = 'hello222';
const helloWorld = 'hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

//mala practica (no asignar nombre de variable)
const helloWorld = () => {
    globalVar = 'im global'
}
helloWorld();
console.log(globalVar);

//mala practica (se puede acceder desde afuera)
const anotherFunction = () => {
    var localVar = globalVar = 'Im global 33';
};

anotherFunction();
console.log(globalVar);



// VIDEO 10 -- hoisting

//ej1 , elevacion de la declaracion de la variable
a = 2;
var a;
console.log(a);

//ej2 -- esto genera error
console.log(a);
var a = 2;

//ej3
nameOfDog('Elmo');
function nameOfDog(name) {
    console.log(name);
}



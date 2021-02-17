//VIDEO 9 -- loops
// clousure que no estamos controlando(creado sin intencion, de forma involuntaria)

//otro ej2, copiado desde= block.js
const anotherFunction = () => {
    for (let i = 0; i < 10; i++) { //no funciona con var, si con let
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFunction();
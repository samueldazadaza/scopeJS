var a = 'Hello';

function hello() {
    let b = 'Hello World1';
    const c = 'Hello World!2';
    if (true) {
        let d = 'Hello World!!3';
        debugger;
    }
};

hello();

//extarido de clousure.js
//alcancia con closure
const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoints = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoints;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);//4
myMoneyBox(6); //10 suma los anteriores valores
myMoneyBox(10);//20
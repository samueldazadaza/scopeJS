//VIDEO 6   entendiendo closure
const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

//alcancia con closure
const moneyBox = () => {
    var saveCoins = 0;
    const countCoints = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoints;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);//4
myMoneyBox(6); //10 suma los anteriores valores
myMoneyBox(10);//20
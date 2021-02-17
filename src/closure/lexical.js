// VIDEO 7 -- ambito lexxico en closures.
const builCount = (i) => {
    let count = i;
    const diplayCount = () => {
        console.log(count++); // laviable count se puede acceder desde 2 lineas arriba
    }
    return diplayCount;
};

const myCount = builCount(1);
myCount();
myCount();
myCount();

const myOtherCount = builCount(10);
myOtherCount();
myOtherCount();
myOtherCount();


let myArr = [0, 1, 2, null, 3, "a", 4, 'mama', 5, null, true, 7, false, 0];

function countTypeElements() {

    let sumEven = 0;
    let sumOdd = 0;
    let sumZero = 0;
    let sumNull = 0;
    let sumUndefined = 0;
    let sumBoolean = 0;
    let sumString = 0;
    let sumSymbol = 0;
    let sumObject = 0;
    let sumBigInt = 0;

    myArr.map(function (item, index) {

        if (item % 2 === 0 && item !== 0) {
            sumEven++;
        } else {
            sumOdd++;
        }

        if (item === 0) {
            sumZero++;
            return;
        }

        if (item == null) {
            sumNull++;
            return;
        }

        if (item == undefined) {
            sumUndefined++;
            return;
        }

        if (typeof item == "boolean") {
            sumBoolean++;
            return;
        }

        if (typeof item == "string") {
            sumString++;
            return;
        }

        if (typeof item == "symbol") {
            sumSymbol++;
            return;
        }

        if (typeof item == "object") {
            sumObject++;
            return;
        }

        if (typeof item == "bigInt") {
            sumBigInt++;
            return;
        }
    });

    console.log(
        "Чётных: " + sumEven + "\n" +
        "Нечётных: " + sumOdd + "\n" +
        "Ноль: " + sumZero + "\n" +
        "Null: " + sumNull + "\n" +
        "Undefined: " + sumUndefined + "\n" +
        "Boolean: " + sumBoolean + "\n" +
        "String: " + sumString + "\n" +
        "Symbol: " + sumSymbol + "\n" +
        "Object: " + sumObject + "\n" +
        "BigInt: " + sumBigInt + "\n" +
        "All Elements in arr: " + myArr.length
    );
}

countTypeElements();

function getPrimeNumbers() {
    let num = +prompt("Введите любое число до 1000: ");

    if (num > 1000) {
        console.log('Данные не верны. Вводимое число должно быть меньше 1000.');
    } else if ((num === 0) || (num === 1)) {
        console.log('Введенное вами число - не является простым.');
    }
    else if ((num % num == 0)) {
        console.log('Введенное вами число - простое.');
    } else {

    }
}
getPrimeNumbers();




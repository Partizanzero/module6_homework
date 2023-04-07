function outputNumbersEverySecond(num1, num2) {

    let numCounter = num1;

    let intervalId = setInterval(function () {
        if (numCounter <= num2) {
            console.log(numCounter);
            numCounter++;
        } else {
            clearInterval(intervalId);
        }

    }, 1000);
}

outputNumbersEverySecond(1, 4);

/* Вопрос куратору: Почему программа не отрабатывает как надо при использовании, например цикла WHILE, DO WHILE или FOR?

function foo(num1, num2) {
    
    let numCounter = num1;

    let intervalId = setInterval(function () 
    {
       while (numCounter <= num2) {
            console.log(numCounter);
            numCounter++;
        } 
            clearInterval(intervalId);

    }, 1000);
}

foo(1, 4); 

==============================

function foo(num1, num2) {
 
    let intervalId = setInterval(function () {
        for (let i = num1; i<= num2; i++){
            console.log(i);
        }
        clearInterval(intervalId);

    }, 1000);
}

foo(1, 4); 

*/

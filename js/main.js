//Переменные
let num = 266219;


//Функции
let numMultiply = (num) => {
    if (!num)
        return 0;
    let sum = 1;
    while (num) {
        sum *= num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};

//Логгеры
console.log(numMultiply(num));
num = numMultiply(num);
num **= 3;
console.log(num);
console.log(String(num).slice(0,2));
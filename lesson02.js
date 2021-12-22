//Переменные
let num = 266219;
let sum = 1;


//Функции
let numMultiply = (num) => {
    while (num != 0) {
        sum = sum * (num % 10);
        num = Math.floor(num / 10); 
    }

    return sum;
};

sum = numMultiply;

//Логгеры
console.log(sum);
console.log(sum * sum * sum);
console.log();

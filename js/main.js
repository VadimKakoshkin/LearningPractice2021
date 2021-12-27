'use strict'

//Переменные
let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

//Функции
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор вёрстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

    screenPrice = prompt("Сколько будет стоить данная работа?");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice))

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let price = 0;

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }

        do {
            price = prompt("Сколько это будет стоить?");
        } while (!isNumber(price))

        sum += +price;
    }

    return sum;
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getRollbackMessage = function () {
    if (fullPrice >= 30000) {
        return "Даём скидку в 10%";
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return "Даём скидку в 5%";
    } else if (fullPrice >= 0 && fullPrice < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что-то пошло не так...";
    }
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

//Вызов функций
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

//Логгеры
console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость вёрстки экранов " + screenPrice + " юаней и стоимость разработки сайта " + fullPrice + " юаней");
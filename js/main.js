'use strict'

//Переменные
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

//Функции
let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getRollbackMessage = function() {
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

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

//Вызов функций
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

//Логгеры
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость вёрстки экранов " + screenPrice + " юаней и стоимость разработки сайта " + fullPrice + " юаней");
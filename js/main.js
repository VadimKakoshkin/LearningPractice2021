'use strict'

//Переменные
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));

//Функции
const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
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

let getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}

function getFullPrice() {
    return screenPrice + getAllServicePrices();
}

const getTitle = function() {
    for (let i = 0; i <= title.length - 1; i++) {
        if (i == 0) {
            title.charAt(i).split(" ");
            title.charAt(i).toUpperCase();
        } else {
            title.charAt(i).toLowerCase();
        }
    }
    return title;
}

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

//Вызов функций
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

//Логгеры
console.log(title);
console.log(screens);

console.log(getAllServicePrices());
console.log(getFullPrice());
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrice());

console.log("Стоимость вёрстки экранов " + screenPrice + " рублей/долларов/гривен/юаней и стоимость разработки сайта " + getFullPrice() + " рублей/долларов/гривен/юаней");
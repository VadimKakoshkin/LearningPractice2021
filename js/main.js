//Переменные
let title = "GitHub";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 33;
let rollback = 74;
let fullPrice = 1000000;
let adaptive = true;

//Интеракция с пользователем
title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?");
screenPrice = +prompt("Сколько будет стоить данная работа?");
adaptive = prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.round(fullPrice - rollback);

//Условия
if (fullPrice > 30000) {
    console.log("Даём скидку в 10%");
    console.log(fullPrice * 0.9);
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    console.log("Даём скидку в 5%");
    console.log(fullPrice * 0.95);
} else if (fullPrice >= 0 && fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
    console.log(fullPrice);
} else {
    console.log("Что-то пошло не так...");
}

//Логгеры

//Переменные
let title = "GitHub";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 33;
let rollback = 74;
let fullPrice = 1000000;
let adaptive = true;

//Логгеры
console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов — " + screenPrice + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта — " + fullPrice + " рублей/долларов/гривен/юани");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100))
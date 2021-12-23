//Переменные
let lang = prompt("Выберите язык");
let namePerson = prompt("Как вас зовут?");

//Условия
if (lang == "ru") {
    console.log("Выбран русский язык");
    for (dayIndex = 1; dayIndex <= 7; dayIndex++) {
        if (dayIndex == 1) {
            console.log("Понедельник");
        } else if (dayIndex == 2) {
            console.log("Вторник");
        } else if (dayIndex == 3) {
            console.log("Среда");
        } else if (dayIndex == 4) {
            console.log("Четверг");
        } else if (dayIndex == 5) {
            console.log("Пятница");
        } else if (dayIndex == 6) {
            console.log("Суббота");
        } else if (dayIndex == 7) {
            console.log("Воскресенье");
        }
    }
} else if (lang == "en") {
    console.log("English language selected");
    for (dayIndex = 1; dayIndex <= 7; dayIndex++) {
        if (dayIndex == 1) {
            console.log("Понедельник");
        } else if (dayIndex == 2) {
            console.log("Вторник");
        } else if (dayIndex == 3) {
            console.log("Среда");
        } else if (dayIndex == 4) {
            console.log("Четверг");
        } else if (dayIndex == 5) {
            console.log("Пятница");
        } else if (dayIndex == 6) {
            console.log("Суббота");
        } else if (dayIndex == 7) {
            console.log("Воскресенье");
        }
    }
}


(namePerson == "Артем") ? console.log("директор") : (namePerson == "Александр") ? console.log("преподаватель") : console.log("студент");
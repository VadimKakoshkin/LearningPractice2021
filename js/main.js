//Переменные
let lang = prompt("Выберите язык");
let arr = [];
let namePerson = prompt("Как вас зовут?");

//Задача 1 (Условия)
/*
if (lang == "ru") {
    console.log("Выбран русский язык");
    arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
} else if (lang == 'en') {
    console.log("English has been selected")
    arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
console.log(arr);
*/

//Задача 1 (Switch-case)
/*
switch (lang) {
    case 'ru':
        console.log("Выбран русский язык");
        arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        break;
    case 'en':
        console.log("English has been selected")
        arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        break;
}
console.log(arr);
*/

//Задача 1 (Многомерный массив)
/*
arr = {
 	'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
 	'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
console.log(arr[lang]);
*/

//Задача 2
console.log((namePerson === 'Артем') ? 'директор' :
    (namePerson === 'Александр') ? 'преподаватель' :
    'студент');
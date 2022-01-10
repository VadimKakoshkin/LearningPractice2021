//Переменные
const book = document.getElementsByClassName('book');
const listItems = document.getElementsByTagName('li');
const adv = document.getElementsByClassName('adv');

//Замена заднего фона
document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

//Удаление рекламы
adv[0].remove();

//Логгеры
console.log(book);
console.log(listItems);

//Восстановление порядка книг
book[0].before(book[1]);
book[2].before(book[4]);
book[2].after(book[4]);
book[5].after(book[4]);

//Восстановление порядка глав
listItems[56].before('Глава 8: За пределами ES6');
listItems[9].after(listItems[12]);
listItems[10].after(listItems[14]);
listItems[16].before(listItems[8]);
listItems[37].after(listItems[45]);
listItems[38].after(listItems[40]);
listItems[39].after(listItems[41]);
listItems[44].after(listItems[42]);
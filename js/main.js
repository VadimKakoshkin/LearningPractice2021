'use strict';

//Переменные
let arr = [216,784,924,716,165,354,405]

console.log('1)');

//Проверка на числа, начинающиеся с 2 или 4
arr.forEach(em => {
  if (String(em).search(/(2|4)/) === 0) console.log(em);
})

console.log('');
console.log('2)');

//Проверка на простые числа
function isSimple(n) {
  for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) return false;
  return n > 1;
}

const res = console.log([...Array(101)].reduce((a, _, i) => a.concat(isSimple(i) ? `Делители этого числа ${i}: 1 и ${i}` : []) , []).join('\n')); 
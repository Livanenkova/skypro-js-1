"use strict"
let commodity = "Кровать TATRAN";
let price = 120000;
const template = `${commodity} , цена ${price} рублей.`
alert(template);
console.log(template);

// Вторая домашка. Задание 1
// Вам необходимо создать функцию генерирующую случайно число и вывести результат выполнения этой функции в консоль.

function randomInteger (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max) {
    console.log('Пожалуйста, введите другое число. Либо числа равны, либо минимальное число больше максимального');
  } else {

  return 'рандомное число равно ' + Math.floor(Math.random() * (max - min)) + min;
  }
}

console.log(randomInteger(1,1))
console.log(randomInteger(9,1))
console.log(randomInteger(1,9))



// HW_Lesson_4(Part_1)
/* Створити функцію яка б отримувала параметром масив з елементів різних типів (строки, масиви, числа, об’єкти і т.д), 
   на виході має повернути строку у camel case (приклад строки у camel case: thisIsExampleOfTheCamelCase), 
   яка б поєднувала в собі всі елементи масиву які є строками.*/
function camelCase(arr) {
  let arrStr = arr.filter(function(x) {
    return typeof x === 'string'
  });

  let regExp = /[,]\w/ig;
  let result = arrStr.toString().toLowerCase().replace(regExp,function(match){
  return match.charAt(1).toUpperCase();
});

  return result;
}
  console.log(camelCase(['This', 'iS', 123, true, 'EXAMPLE', [1, 2, 3, 4], {car: 'toyota'}, 'oF', 'tHe', 'CaMeL', 'cAsE', false])); // thisIsExampleOfTheCamelCase

/* Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, 
і повертала б масиву у якому кожен елемент масиву є літерою англійського алфавіту відповідний конкретному елементу 
масива (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k]*/
function convertIntToChar(num) {
  let result = [];

  for (let char in num) {
    result.push(String.fromCharCode(64 + num[char]).toLowerCase());
  }

  return result;
}
  console.log(convertIntToChar([4, 3, 22, 11])); // ['d', 'c', 'v', 'k']

/* Створити функцію яка параметром отримує об’єкт 
(наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) 
і повертає новий об’єкт у який містить тільки числа більші рівні 0.*/
function isInteger(obj) { 
let newObj = {};

  for (let i in obj) {
    if (obj[i] >= 0) {
      newObj[i] = obj[i];
    }
  }

  return newObj;
}
console.log(isInteger({a: 22, b: -11.35, c: 41.2, d: 'hello'})); // {a: 22, c: 41.2}

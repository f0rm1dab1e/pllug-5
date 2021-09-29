'use strict';

debugger;

// Створити пустий об’єкт;
const obj = {};
console.log(obj); // Object (створено пустий обєкт)

// Створити пустий об’єкт без прототипу;
const obj = Object.create(null);
console.log(obj); // {}

// Додати до об’єкта будь які нові поля всіма відомими способами;
let obj = {};
obj.key1 = 'value1'; // перший спосіб додавання значення
obj['key2'] = 'value2'; // другий спосіб додавання значення
console.log(obj); // {key1: 'value1', key2: 'value2'}

// Створити пустий масив;
let arr = [];
console.log(arr); // [] (створено пустий масив)

// Створити пустий масив довжиною 100500 елементів;
let arr = Array.apply(null, Array(100500));
console.log(arr); // (100500) [[0...9999], [10000...19999], ]

// Створити масив з декількома елементами;

// перший спосіб створення масива
let number = [1];
console.log(number); // [1]

// другий спосіб створення масива
let animals = ['Dog', 'Cat'];
console.log(animals); // ['Dog', 'Cat']

// третій спосіб створення масива
const cars = [];
cars[0] = 'Porsche';
cars[1] = 'Mitsubishi';
cars[2] = 'Mercedes-Benz';
console.log(cars); // ['Porsche', 'Mitsubishi', 'Mercedes-Benz']

// четвертий спосіб створення масива
const fruits = new Array('Banana', 'Apple', 'Watermelon', 'Orange');
console.log(fruits); // ['Banana', 'Apple', 'Watermelon', 'Orange']

// пятий спосіб створення масива
const vegetables = Array('Pumpkin', 'Cucumber', 'Sweet Potato', 'Onion', 'Spinach');
console.log(vegetables); // ['Pumpkin', 'Cucumber', 'Sweet Potato', 'Onion', 'Spinach']

// Зробити заповнений масив пустим;
let animals = ['Dog', 'Cat'];
animals.length = 0;
console.log(animals); // [] (заповнений масив став пустим)

// Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за його індексом та поверне новий масив(оновлений- після видалення);
function removeArray(numbers) {
  let indexToDelete = 1;
  let result = numbers.splice(indexToDelete, 1); // ця змінна для видалення конкретного індекса, при потребі до неї можна підключити інпут.
  
  if (indexToDelete >= numbers.length) {
    return 'Inserted index does not exist!';
  }
  
  if (indexToDelete < -numbers[numbers.length-1]) {
    return 'Inserted index does not exist!';
  }

  return numbers;
}
console.log(removeArray([1, 2, 3, 4, 5])); // [1, 3, 4, 5]

// Створити функцію, яка приймає один масив у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий масив чи ні;
function checkArray(arr) {
  if (arr.length >= 1) {
    return true;
  } else {
    return false;
  }
}
console.log(checkArray(['Poland', 'Ukraine', 'Germany', 'USA'])); // true

// Створити функцію, яка приймає один об’єкт у якості аргументу та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні;
function checkObject(obj) {
  if (obj.length >= 1) {
    return true;
  } else {
    return false;
  }
}
console.log(checkObject({})); // false

// Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;
function concatArr(cities1, cities2) {
  return cities1.concat(cities2);
}
console.log(concatArr(['Poland', 'Ukraine'], ['Germany', 'USA'])); // ['Poland', 'Ukraine', 'Germany', 'USA']

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з елементів попереднього в степені 3. Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27];
function powerIndex(numbers) {
  let poweredNumbers = [];
  
  for (let i of numbers) {
    poweredNumbers.push(Math.pow(i, 3)); // піднесення числа і до куба
  }
  
  return poweredNumbers;
}
console.log(powerIndex([1, 2, 3])); // [1, 8, 27]

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається з непарних елементів вхідного масиву;
function findOddNumber(numbers) {
  let oddNumbers = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNumbers.push(numbers[i]); // пушення непарного числа у новий масив
    }
  }
  
  return oddNumbers;
}
console.log(findOddNumber([1, 2, 3, 4, 5])); //  [1, 3, 5]

// Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11];
function isRoundNumber(numbers) {
  let wholeNumber = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (Math.floor(numbers[i]) === numbers[i]) {
      wholeNumber.push(numbers[i]); // пушимо в пустий масив цілі числа
    }
  }
  
  return wholeNumber;
}
console.log(isRoundNumber([5, 3.14, 4.1, 10, 11, 20.1])); // [5, 10, 11]

// Створити функцію, яка нічого не повертає;
function isEmpty(city) {
  let result = city.toLowerCase();
  
  return; // функція, яка нічого не повертає
}

console.log(isEmpty('LVIV'));

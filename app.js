/*
* Провести заміри продуктивності для звичайного об’єкта, об’єкта без прототипу та MAP. Зробити заміри на різних наборах даних, наприклад 100 ключів, 10 000 ключів, 10 000 000 ключів. Дослідити швидкість добавлення нового ключа, взяття значення за ключем, видалення ключа на кожному наборі даних. Також дослідити перетворення тестовану структуру даних у масив, швидкість ітерації(у чистій формі та разом з конвертацією).
* Завдання не виконане, відсутня будь яка демонстрація замірів продуктивності.
*/

/*Написати функцію, яка приймає об’єкт у якості аргументу та повертає Map 
з тими самими даними. Тобто просто перетворити об’єкт у Map.*/

/**
 * Можна трішки скоротити і не використовувати зайве присвоювання.
 */
function objectToMap(obj) {
  return new Map(Object.entries(obj));
}

console.log(objectToMap({ a: 11, b: 22, c: 33 })); // Map(3) {'a' => 11, 'b' => 22, 'c' => 33}

/*Написати функцію, яка приймає Map у якості аргументу та повертає об’єкт з тими самими даними. 
Тобто просто перетворити Map у об’єкт.*/

/**
 * Завдання виконано не правильно, функція має приймати параметром Map, а не об'єкт.
 */
function mapToObj(m) {
  return Array.from(m).reduce(
    (obj, [key, value]) => Object.assign(obj, { [key]: value }),
    {}
  );
}

const map = new Map([
  ['a', 11],
  ['b', 22],
  ['c', 33],
]);
console.log(mapToObj(map)); // {a: 11, b: 22, c: 33}
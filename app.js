/*Написати функцію, яка приймає об’єкт у якості аргументу та повертає Map 
з тими самими даними. Тобто просто перетворити об’єкт у Map.*/

function objectToMap(obj) {
  let result = new Map(Object.entries(obj));
  return result;
}

console.log(objectToMap({ a: 11, b: 22, c: 33 })); // Map(3) {'a' => 11, 'b' => 22, 'c' => 33}

/*Написати функцію, яка приймає Map у якості аргументу та повертає об’єкт з тими самими даними. 
Тобто просто перетворити Map у об’єкт.*/

function mapToObj(m) {
  let map = new Map();
  map.set('a', 11);
  map.set('b', 22);
  map.set('c', 33);
  
  let obj = Array. from(map). reduce((obj, [key, value]) => (
    Object. assign(obj, { [key]: value })
  ), {});

  return obj;
}

console.log(mapToObj({ 'a': 11, 'b': 22, 'c': 33 })); // {a: 11, b: 22, c: 33}

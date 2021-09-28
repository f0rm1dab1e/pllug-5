// task-1
// Написати скріпт, який призведе до краху вкладки в браузері(пам’ятайте про ліміти!);
// Write a script that will cause crash in the browser (remember about the limits!);

'use strict';

debugger;

let i = 0;

while(true) {
  i += 1;
  i++;
  
  console.log(i);
}


// task-2
// Task: To write code that accepts input 'str' and changes its characters to upper letters and bigger to smaller. Example: ‘Test’ ⇒ ‘tEST’;
// Завдання: Написати код, яка на вході приймає стрічку і змінює всі малі букви на великі, а великі на малі. Тобто ‘Test’ ⇒ ‘tEST’;

'use strict';

debugger;

function convertText(text) {
  let str = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      str += text[i].toLowerCase();
    }

    if (text[i] === text[i].toLowerCase()) {
      str += text[i].toUpperCase();
    }
  }

  return str;
}
console.log(convertText('Test')); // tEST

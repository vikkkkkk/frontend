/*

Напишите функцию, которая на вход принимает две строки - сообщение (обычная строка с текстом) и символ, который надо удалить из этого сообщения.
Обязательно используйте методы и циклы, которые вы изучили.

*/

function removeString(message, symbol) {
    const arr = message.replace(new RegExp(symbol, 'g'), '');
    return arr;
}

/* 

"new RegExp(symbol, 'g')" создает регулярное выражение, которое будет искать все вхождения символа (или строки, представленной 
в переменной symbol) в тексте 

Когда используется это регулярное выражение с методом replace() и заменяется на пустую строку '', 
это приводит к удалению всех вхождений этого символа из текста.

*/

console.log(removeString("Большое и интересное сообщение", "о"));
console.log(removeString("Hello world!", "z"));
console.log(removeString("А роза азора", "А"));
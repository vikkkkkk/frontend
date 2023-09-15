/*

Напишите функцию counter, которая при каждом вызове будет возвращать число на 3 больше, чем в прошлый.
Нельзя использовать переменные, объявленные через var!

*/

function counter() {
    let curCount = -3;
    function recurCount() {
        curCount += 3;
        return curCount;
    };
    counter = recurCount;
    return recurCount();
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/* 

Тут используется замыкание (поскольку recurCount имеет доступ к переменной curCount внешней функции) и рекурсия для создания функции counter, 
которая возвращает последовательные числа, увеличиваясь на 3. Да, я знаю, что мы знакомимся с рекурсией только в пятом задании, 
но в этом задании не сказано, что использовать рекурсию нельзя)

*/
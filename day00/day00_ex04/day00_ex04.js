/*

Вам нужно описать ряд функций, которые могут принимать в качестве необязательного аргумента callback. Если такой аргумент есть, то передать число n в этот коллбек, иначе просто вернуть число n.
Например, функция one может принять в качестве аргумента функцию sum, тогда в return будет sum(1). Если же в функцию не передали ничего, то она просто вернет 1.
Также надо написать 4 функции основных арифмитических операторов, которые принимают в качестве аргумента первое число, а возвращают функцию, которая принимает в качестве аргумента второе число и возвращает их сумму/разность/частное/произведение.

*/

// function iks(callback) {
//   if (callback) {
//     return callback(x);   
//   }
//   return x;
// }

function one(callback) {
    return callback ? callback(1) : 1;
}
function two(callback) {
    return callback ? callback(2) : 2;
}
function three(callback) {
    return callback ? callback(3) : 3;
}
function four(callback) {
    return callback ? callback(4) : 4;
}
function five(callback) {
    return callback ? callback(5) : 5;
}
function six(callback) {
    return callback ? callback(6) : 6;
}
function seven(callback) {
    return callback ? callback(7) : 7;
}
function eight(callback) {
    return callback ? callback(8) : 8;
}
function nine(callback) {
    return callback ? callback(9) : 9;
}

function plus(a) {
    return function(b) {
        return a + b;
    };
}

function minus(a) {
    return function(b) {
        return a - b;
    };
}

function divide(a) {
    return function(b) {
        return a / b;
    };
}

function mult(a) {
    return function(b) {
        return a * b;
    };
}

console.log(four());
console.log(five(mult(three())));
console.log(one(mult(three(plus(four())))));

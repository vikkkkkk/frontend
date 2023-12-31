/*

Вам нужно написать функцию, которая принимает в качестве аргумента массив чисел и удаляет все повторяющиеся значения. 
Напишите функцию с ипользованием 2 разных циклов.

*/

/* цикл for */

function removeRepsWithFor(array) {
 // создаем пустой массив, который будет содержать уникальные значения
  let uniqueArray = [];
 // итерируемся по каждому элементу входного массива с помощью цикла
  for (let i = 0; i < array.length; i++) {
    // проверяем, если значение еще не находится массиве
    // метод возвращает -1, если элемент не найден в массиве
    if (uniqueArray.indexOf(array[i]) === -1) {
	 // если элемент не найден, добавляем его
      uniqueArray.push(array[i]);
    }
  }
  // возвращаем массив, который содержит только уникальные элементы
  return uniqueArray;
}

/* цикл while */

function removeRepsWithWhile(array) {
  let uniqueArray = [];
  // индекс для итерации по входному массиву
  let i = 0;
  while (i < array.length) {
    // проверяем, если значение еще не находится в массиве
    if (uniqueArray.indexOf(array[i]) === -1) {
      // если элемент не найден, добавляем его
      uniqueArray.push(array[i]);
    }
    // увеличиваем индекс для перехода к следующему элементу входного массива
    i++;
  }
  // возвращаем массив, который содержит только уникальные элементы
  return uniqueArray;
}

console.log(removeRepsWithFor([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]));
console.log(removeRepsWithFor([1, 1, 1, 1]));
console.log(removeRepsWithFor([1, 2, 3, 4, 5, 6]));

console.log(removeRepsWithWhile([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]));
console.log(removeRepsWithWhile([1, 1, 1, 1]));
console.log(removeRepsWithWhile([1, 2, 3, 4, 5, 6]));

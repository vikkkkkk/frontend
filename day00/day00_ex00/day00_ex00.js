function removeReps(array) {
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
console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]));
console.log(removeReps([1, 1, 1, 1]));
console.log(removeReps([1, 2, 3, 4, 5, 6]));
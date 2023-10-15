// Завдання 1
// Дано: функція яка приймає масив чисел або стрічок.
// Результат: вивести у консоль масив унікальних значень початкового масиву
// Приклад: [2, 3, 1, 3, 3, 7] => [2,3,1,7]

function unicFn(initialArray) {
  const array = [];
  for (let i = 0; i < initialArray.length; i++) {
    if (!array.includes(initialArray[i])) {
      array.push(initialArray[i]);
    }
  }
  console.log(array);
}

unicFn([2, 3, 1, 3, 10, 7]);

// Завдання 1
// Дано: функція яка приймає масив чисел або стрічок.
// Результат: вивести у консоль масив унікальних значень початкового масиву
// Приклад: [2, 3, 1, 3, 3, 7] => [2,3,1,7]

function unicFn(initialArray) {
  const arr2 = [];
  initialArray.forEach(function (element) {
    if (!arr2.includes(element)) {
      arr2.push(element);
    }
  });
  return arr2;
}
const arr = [2, 3, 1, 3, 3, 7];
console.log(unicFn(arr));



// Завдання 3
// Дано: функція яка приймає масив елементів будь-яких типів
// Результат: вивести у консоль масив який містить лише стрічки початкового масиву
// Приклад:
// [2, “string”, 3, , , ”test”] => [“string”, “test”]

function filterArray(initialArray) {
  const array = [];
  for (let index = 0; index < initialArray.length; index++) {
    if (typeof initialArray[index] == "string") {
      array.push(initialArray[index]);
    }
  }
  console.log(array);
}

filterArray([2, "string", 3, , , "test"]);

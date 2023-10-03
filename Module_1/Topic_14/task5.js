// Завдання 5
// Дано: Функція приймає три параметри: масив обєктів [{}, {}], назву поля обєкту (string), значення (string)
// Результат: Вивести у консоль новий масив з якого видалені усі обєкти в яких keyName буде дорівнювати value
// Приклад:
// removeObj([{age: 1}, {age: 2}, {age: 2}, {year: 2}], "age", 2) => [ { age: 1 }, { year: 2 } ]

function removeObj(arrayOfObj, keyName, value) {
  const result = arrayOfObj.filter((obj) => {
    return obj[keyName] !== value;
  });

  console.log(result);
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2);
removeObj(arr, "year", 2);

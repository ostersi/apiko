// Завдання 4
// Дано: Функція приймає Об’єкт типу {[name]: {age: number, city: string}}
// Результат: Вивести у консоль масив із іменами людей які із міста "London" та старше 18 років
// Приклад:
// {Max: {age: 23, city: “London”}, Mike: {age: 20: city: “NY”}} => [“Max”]

function findUser(initialObject) {
  const result = [];

  for (const name in initialObject) {
    if (
      initialObject.hasOwnProperty(name) &&
      initialObject[name].age > 18 &&
      initialObject[name].city === "London"
    ) {
      result.push(name);
    }
  }

  console.log(result);
}

findUser({ Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" } });

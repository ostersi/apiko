// Завдання 4
// Дано: Функція приймає Об’єкт типу {[name]: {age: number, city: string}}
// Результат: Вивести у консоль масив із іменами людей які із міста "London" та старше 18 років
// Приклад:
// {Max: {age: 23, city: “London”}, Mike: {age: 20: city: “NY”}} => [“Max”]

function findUser(initialObject) {
  const arr = [];
  for (const name in initialObject) {
    if (
      Object.values(initialObject[name])[0] >= 18 &&
      Object.values(initialObject[name])[1] == "London"
      // initialObject[name].age > 18 &&
      // initialObject[name].city === "London"
    ) {
      arr.push(name);
    }
  }
  console.log(arr);
}

findUser({ Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" } });

// В функції showCarInfo вивести в консоль name та model
// об'єкту car використовуючи контекст через this,
// викликати функцію showCarInfo використовуючи bind.

const car = {
  name: "Tesla",
  model: "X",
};

function showCarInfo() {
  console.log(this.name);
  console.log(this.model);
}

const result = showCarInfo.bind(car);
result();

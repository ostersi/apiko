// Створити клас який містить поле name.
// Зробити так щоб це поле автоматично через 5с
// занулювалося(ставало null) після створення об’єкта
// Також добавити функцію(метод) цього класу яка буде
// зупиняти(скасовувати) це занулювання

class TimedObject {
  constructor(name) {
    this.name = name;
    this.nullifyTimer = setTimeout(() => {
      this.name = null;
      console.log(`Поле 'name' занулено.`);
    }, 5000);
  }

  stopNullifyTimer() {
    clearTimeout(this.nullifyTimer);
    console.log(`Занулення скасовано.`);
  }
}

const myObject = new TimedObject("Example");

setTimeout(() => {
  myObject.stopNullifyTimer();
}, 6000);

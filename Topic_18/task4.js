// Дано: об'єкт у якому необхідно переписати існуючу функція на стрілочну,
// щоб він почав виконуватись коректно
// Результат: вивести у консоль “bark”

//До:
const dog2 = {
  sound: "bark",
  greet: function () {
    setTimeout(function () {
      // fix code in this line
      console.log(this.sound);
    }, 0);
  },
};
dog2.greet();

//Після:
const dog = {
  sound: "bark",
  greet: function () {
    setTimeout(() => {
      console.log(this.sound);
    }, 0);
  },
};
dog.greet();

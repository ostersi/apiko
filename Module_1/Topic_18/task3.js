// Дано: код в якому необхідно знайти помилку і виправити її
// Результат: вивести в консоль “meow”

//До:
const cat2 = {
  sound: "meow",
  greet: function () {
    setTimeout(
      function () {
        console.log(this.sound);
      }, // write fix in this line of code
      0
    );
  },
};
cat2.greet(); // should produce "meow"

//Після:
const cat = {
  sound: "meow",
  greet: function () {
    setTimeout(
      function () {
        console.log(this.sound);
      }.bind(this), // write fix in this line of code
      0
    );
  },
};

cat.greet();

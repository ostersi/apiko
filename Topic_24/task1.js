// 1) Створити ф-ію конструктор Calculator та до її
// прототипу добавити два методи sum(a,b) та subtract(a,b)
// 2) Створити ф-ію конструктор AdvancedCalculator (наслідує
//     методи від Calculator) та до її'      прототипу добавити два
//     методи multiply(a,b) та divide(a,b)

function Calculator() {}

Calculator.prototype.sum = function (a, b) {
  return a + b; 
};

Calculator.prototype.subtract = function (a, b) {
  return a - b;
};

function AdvancedCalculator() {}

AdvancedCalculator.prototype = Object.create(Calculator.prototype);

AdvancedCalculator.prototype.multiply = function (a, b) {
  return a * b;
};

AdvancedCalculator.prototype.divide = function (a, b) {
  if (b === 0) {
    return "Помилка: Ділення на нуль неможливе";
  }
  return a / b;
};

const basicCalc = new Calculator();
console.log(basicCalc.sum(5, 3));
console.log(basicCalc.subtract(5, 3));

const advancedCalc = new AdvancedCalculator();
console.log(advancedCalc.multiply(5, 3));
console.log(advancedCalc.divide(6, 2));
console.log(advancedCalc.divide(6, 0));

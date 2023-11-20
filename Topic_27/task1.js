// Створити ф-ію isString, яка першим параметром отримує функцію
// колбек та другим значення. Перевіряє чи передане значення це
// стрічка і колбек це функція та виконує колбек із цим значенням
// або виводить помилку в консоль якщо це не стрічка або колбек не є функцією

function isString(callback, value) {
  if (typeof callback === "function" && typeof value === "string") {
    return callback(value);
  } else {
    console.error("Помилка: Передане значення не є стрічкою або колбек не є функцією.");
  }
}

function callbackFunction(str) {
  console.log("Передана стрічка:", str);
}

isString(callbackFunction, "Hello world");
isString(callbackFunction, 123);

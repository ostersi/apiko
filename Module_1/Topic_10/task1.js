// Дано: Функція яка приймає значення яке може бути будь-яким типом даних = "302", null, 128, 60

// Результат: Вивести у консоль числа які є степенем двійки та не більші заданого значення або вивести помилку про коректний тип якщо значення не є числом
function printPowsOf2(number) {
  if (typeof number !== "number") {
    console.log("incorrect type");
    return 0;
  }
  for (let index = 1; index <= number; index *= 2) {
    console.log(index);
  }
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);

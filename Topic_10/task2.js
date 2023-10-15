// Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];
// Результат: Вивести у консоль суму чисел у масиві
const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
function calculateSumOfArray() {
  
  let sum = 0;
  for (let index = 0; index < initialArray.length; index++) {
    if (typeof initialArray[index] === "number") {
      sum += initialArray[index];
    }
  }
  console.log(sum);
}

calculateSumOfArray();

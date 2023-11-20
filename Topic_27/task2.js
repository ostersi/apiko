// Дано: обєкт Date та його методи
// Створити ф-ію clock, яка імітує поведінку
// годинника: кожну секунду виводить в консоль
// час у форматі "Hours:Minutes:Seconds";

function clock() {
  function updateClock() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  updateClock();
  setInterval(updateClock, 1000);
}

clock();

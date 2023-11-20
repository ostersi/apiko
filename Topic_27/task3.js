// Створити ф-ію timer, яка приймає число(секунди)
// та імітує поведінку таймера: кожну секунду 
// виводить в консоль стрічку Timer: ${s}, 
// де ${s} - кількість секунд що залишилось

function timer(seconds) {
  function updateTimer() {
    console.log(`Timer: ${seconds}`);
    seconds--;

    if (seconds < 0) {
      clearInterval(timerInterval);
      console.log("Завершено");
    }
  }
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

timer(5);
  
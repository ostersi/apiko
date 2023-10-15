// Дано: Функція яка приймає назва місяця у форматі = "DECEMBER" | "FEBRUARY" | "JULY" і тд.

// Результат: Вивести у консоль назву пори року якій відповідає даний місяць. “summer” | “autumn” | “winter” | “spring”.
function printSeasonByMonth(month) {
    switch (month) {
      case "SEPTEMBER":
      case "OCTOBER":
      case "NOVEMBER":
        console.log("autumn");
        break;
      case "JANUARY":
      case "FEBRUARY":
      case "DECEMBER":
        console.log("winter");
        break;
      case "MARCH":
      case "APRIL":
      case "MAY":
        console.log("spring");
        break;
      case "JUNE":
      case "JULY":
      case "AUGUST":
        console.log("summer");
        break;
      default:
        console.log("Не вірно вказаний місяць");
    }
  }
  
  printSeasonByMonth("SEPTEMBER");
  printSeasonByMonth("NOVEMBER");
  printSeasonByMonth("JULY");
  printSeasonByMonth("APRIL");
  

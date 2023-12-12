// Зробити запит до SWAPI щоб отримати список
// людей з прізвищем Skywalker, вивести у консоль.
// Документація по пошуку - https://swapi.py4e.com/documentation#search
// Результат: вивести у консоль список людей з прізвищем Skywalker у форматі:
// [{ name: 'Luke Skywalker', height: 172, ... },
//  { name: 'Anakin Skywalker', height: 188, ... }, ...]

async function getSkywalkers() {
  try {
    const searchUrl = "https://swapi.py4e.com/api/people/?search=skywalker";
    const response = await fetch(searchUrl);
    if (!response.ok) {
      throw new Error(`Failed with status code: ${response.status}`);
    }

    const data = await response.json();
    const Skywalker = data.results.map(({ name, height, ...rest }) => ({
      name,
      height,
      ...rest,
    }));
    console.log("Список людей з прізвищем Skywalker: \n", Skywalker);
  } catch (e) {
    console.error("Помилка: ", e);
  }
}

getSkywalkers();

// Написати функцію яка буде використовувати попередньо написану 
// функцію fetchSWAPI, ця функція повинна робити запити щоб отримати 
// дані людини з вказаним ім'ям, після цього на основі отриманої 
// відповіді паралельно отримати деталі фільмів у яких людина з'явилась.
// Функція повинна повертати об'єкт з ім'ям людини та списком з деталями фільмів
//  у форматі: {name: ‘’, films: [{title: ‘’, episode_id: ‘’, ...}, ...]}

async function fetchSWAPI(resource, throwError = false) {
  const rootUrl = "https://swapi.py4e.com/api/";
  
  const apiUrl = resource.startsWith("http") ? resource : rootUrl + resource;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      if (throwError) {
        throw new Error(`Failed with status code: ${response.status}`);
      } else {
        console.error(
          `${resource} fetchSWAPI error`,
          `Error: Failed with status code: ${response.status}`
        );
        return null;
      }
    }

    return await response.json();
  } catch (e) {
    if (throwError) {
      throw e;
    } else {
      console.error(`${resource} fetchSWAPI error`, e);
      return null;
    }
  }
}

async function getPersonFilms(name) {
    try {
      const personData = await fetchSWAPI(`people/?search=${name}`);
      
      const person = personData.results[0];
      const filmsUrls = person.films;

      const filmsPromises = filmsUrls.map(url => fetchSWAPI(url));
      const filmsData = await Promise.all(filmsPromises);
  
      const films = filmsData.map(film => ({title: film.title, episode_id: film.episode_id, }));
      return { name: person.name, films };
    } catch (e) {
      console.error("Помилка", e);
      return null;
    }
  }
  
  async function testGetPersonFilms() {
    const lukeFilms = await getPersonFilms("Luke");
    console.log("lukeFilms ", lukeFilms);
    
    const kenobiFilms = await getPersonFilms("Kenobi");
    console.log("kenobiFilms ", kenobiFilms);
   }
    
   testGetPersonFilms();
  
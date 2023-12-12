// Отримати список вказаних альбомів, вказуючи їхні id.
// Для цього потрібно використати ресурс /albums.
// Щоб отримати альбом з id - 5, можна використати ендпоінт /albums/5
// Але дане API не надає можливості вказати декілька 
// id альбомів щоб отримати ці альбоми в одному запиті
// Тому потрібно робити декілька запитів якщо хочемо отримати декілька альбомів
// Написати функцію getAlbum(id), яка буде 
// приймати id альбому який потрібно отримати.
// функція getAlbum повинна повертати проміс, який 
// у разі успішного виконання повертає дані альбому
// Написати функцію getSpecifiedAlbums(ids = []), 
// яка буде приймати масив ids з значеннями id для 
// альбомів які потрібно отримати функція getSpecifiedAlbums() 
// повинна повертати проміс, який у разі успішного 
// виконання повертає масив вказаних альбомів
// Щоб getSpecifiedAlbums виконувалась швидше, усі запити 
// на отримання певного альбому повинні виконуватись паралельно
// У разі успішного виконання промісу з getSpecifiedAlbums, вивести у консоль результат.
// Очікуваний результат - масив вказаних альбомів

const baseUrl = "https://jsonplaceholder.typicode.com";

function getAlbum(id) {
  return fetch(`${baseUrl}/albums/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }
      return response.json();
    });
}

function getSpecifiedAlbums(ids = []) {
  const albumPromises = ids.map(id => getAlbum(id));
  return Promise.all(albumPromises);
}

getSpecifiedAlbums([1, 15]).then(results => {
    console.log("Масив вказаних альбомів: \n", results);
  }).catch(e => {
    console.log("Помилка: ", e);
  });




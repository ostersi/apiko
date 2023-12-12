// Можна створити константу baseUrl = https://jsonplaceholder.typicode.com
// const baseUrl = "https://jsonplaceholder.typicode.com";
// Будемо використовувати ресурс /users щоб отримати дані користувачів
// Завдання: Отримати список користувачів з віддаленого ресурсу /users.
// Використати fetch.
// Очікуваний результат - масив користувачів

const baseUrl = "https://jsonplaceholder.typicode.com";
fetch(`${baseUrl}/users`).then(response => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    return response.json();
  }).then(users => {
    console.log("Масив користувачів: \n", users);
  }).catch(e => {
    console.error("Помилка:", e);
  });



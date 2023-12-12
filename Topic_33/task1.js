// Переписати функцію з Promise на async/await з використанням fetch.
// function fetchAlbums() {
//  fetch('https://jsonplaceholder.typicode.com/users/1/albums')
//  .then((response) => {
//    if (!response.ok) {
//      throw new Error(`Failed with status code: ${response.status}`);
//    }
//    return response.json();
//  })
//  .then((data) => {
//    console.log("Result: ", data);
//  })
//  .catch((error) => {
//    console.log("Request Error: ", error);
//  });
// }
// fetchAlbums();

async function fetchAlbums() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');
      if (!response.ok) {
        throw new Error(`Failed with status code: ${response.status}`);
      }
      const data = await response.json();
      console.log("Result: \n", data);
    } catch (error) {
      console.log("Request Error: ", error);
    }
  }
  
  fetchAlbums();
  
// Global Scope: створити змінну в глобальній області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
let globalVal = "Global Scope";
function globalScopeFunction() {
  console.log(globalVal);
}
globalScopeFunction();


// Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати вивести цю змінну в консоль всередині функції, та за межами функції
function localScopeFunction() {
  let localVal = "Function Scope";
  console.log(localVal);
}
//console.log(localVal); - localVal is not defined
localScopeFunction();


//Block Scope: Створити функцію, в функції написати блок {} всередині якого оголосити змінну та вивести її в консоль, тоді вивести в консоль цю змінну за межами блоку, та подивитись на результат
function blockScopeFunction() {
  {
    let blockVal = "Block Scope";
    var blockValVisible = "Block Scope Visible";
  }
  //console.log(blockVar); - blockVal is not defined
  console.log(blockValVisible);
}
blockScopeFunction();

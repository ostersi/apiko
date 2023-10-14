// Global Scope: створити змінну в глобальній області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
let globalVar = "Global Scope";
function globalScopeFunction() {
  console.log(globalVar);
}
globalScopeFunction();


// Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати вивести цю змінну в консоль всередині функції, та за межами функції
function localScopeFunction() {
  let localVar = "Function Scope";
  console.log(localVar);
}
//console.log(localVar); - localVar is not defined
localScopeFunction();


//Block Scope: Створити функцію, в функції написати блок {} всередині якого оголосити змінну та вивести її в консоль, тоді вивести в консоль цю змінну за межами блоку, та подивитись на результат
function blockScopeFunction() {
  {
    let blockVar = "Block Scope";
    var blockVarVisible = "Block Scope Visible";
  }
  //console.log(blockVar); - blockVar is not defined
  console.log(blockVarVisible);
}
blockScopeFunction();

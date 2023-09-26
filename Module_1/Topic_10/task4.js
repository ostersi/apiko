function printWordCount(string) {
  let count = 0;
  let space = true;

  for (let char of string) {
    if (char === " ") {
      space = true;
    } else if (space) {
      count++;
      space = false;
    }
  }

  console.log(count);
}

printWordCount("Easy string for count");
printWordCount("Easy");
printWordCount("Some string with a triple   space");
printWordCount("Some?  string, with a triple   space");

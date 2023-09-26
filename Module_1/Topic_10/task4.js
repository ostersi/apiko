function printWordCount(string) {
   let count = 0;
   let isDelimited = true;
 
   for (let char of string) {
     if (char === " ") {
       isDelimited = true;
     } else if (isDelimited) {
       count++;
       isDelimited = false;
     }
   }
 
   console.log(count);
 }
 
 printWordCount("Easy string for count");
 printWordCount("Easy");
 printWordCount("Some string with a triple   space");
 printWordCount("Some?  string, with a triple   space");
// function statement 
const isEven  = function (num) {
  return num % 2 === 0;
}
// return statement
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//the code above can be simplified by not setting the function return values to new variables before doing something with them
{ 
const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));
}
//console.log is itself a function–only it's pre-defined by JavaScript and can be used it without having to declare it ourselves - second, we can pass the result returned by isEven directly to console.log, which takes that value and outputs it to terminal
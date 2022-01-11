const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
 
// difference between using console.log & return

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 
// outputs: 'Hello, John'
// a console.log statement will result in some content being displayed in the console

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
// outputs: undefined 
// the string 'Hello, John' to a variable and nothing will get output to the console - return statement will not output anything to the console
// we can still add console.log later to print out the variable on the console
console.log(greeting);


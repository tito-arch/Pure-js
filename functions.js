//Some functions in js. Number 46 will piss on you.



//Arrow function test

let anotherSum = (a,b) =>{
return a + b;
}
console.log(anotherSum(2,3)); //5



//Normal function

function sum4 (a,b){
  return a * b;
}
console.log(sum4(2,3)); //6

//2

function sayHi(name) {
  return('Hello' + ' ' + name);
}

console.log(sayHi("Tito"));



//Anonymus function

let sum6 = function(a,b){
  return a - b; 
}
console.log(sum6(2,3)); //-1

//Passing an anonymous function 
function alertMessage(text) {
  console.log(text());
}

alertMessage(function () {
  return "Hello world!";
});

//Passing anonymous function as an argument
function alertMessage(a) {
  console.log("a");
  console.log(a()); // Logs the result of invoking the function passed as argument to the console
}
alertMessage(function () {
       return "Hello world! I am Animus";
     });




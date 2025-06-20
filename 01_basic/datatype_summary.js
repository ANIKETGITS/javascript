// Primitive Datatype (Primitive DataTypes)

// There are 7 datatypes
// ->String
// ->Number
// ->Boolean
// ->Null
// ->Undefined
// ->Symbol
// ->BigInt

// ==>With Example
// ->String<-
let str = "Hello";
// ->Number<-
let num = 234;
// ->Boolean<-
let bool = true;
// ->Null<-
let b = null;
// console.log(b);
// ->Undefined<-
let a;
// console.log(a);
// ->Symbol<-
const id = Symbol("423");
const anotherId = Symbol("423");
// console.log(id == anotherId);

// ->BigInt<-
const bigInt = 2425n;
// console.log(typeof bigInt);

// Reference ( Non-Primitive DataTypes)
// ->Array
const heros = ["spiderman", "iron man", "thor", "Hulk"];
// console.log(typeof heros);

console.log("heros type is " + typeof heros);
console.log(heros);

// ->Objects

const obj = {
  name: "aniket",
  age: 21,
};

console.log(obj);
console.log(typeof obj);

// ->Functions
const myFunc = function () {
  console.log("hello");
};
myFunc();

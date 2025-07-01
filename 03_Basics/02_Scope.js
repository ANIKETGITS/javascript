let a = 20;
const b = 30;
var c = 32;

// {} <====Scope (When Comes With Function it is called as scope of That Program)

//Note:- Code written in if is a block scope
if (true) {
  //let
  let p = 20;
  const q = 30;
  //avoid using var for declaration
  var r = 32;
  //this problem also comes with if you declare like this =>
  z = 2;
}

// console.log(p);
// console.log(q);
// console.log(r);
// console.log(z);

// console.log(a);
// console.log(b);
// console.log(c);

//More Example to Understand

function one() {
  const userName = "aniket";
  function two() {
    const webSite = "www.google.com";
    console.log(userName);
  }
  //   console.log(webSite); //
  //   two();
}
// one();

// mini concept of hoisting in js

console.log(addone(5)); //Can access 'addone' before initialization
function addone(num) {
  return num + 1;
}

console.log(addtwo(8)); //Cannot access 'addtwo' before initialization

const addtwo = function (num) {
  return num + 1;
};

//Immeadiately Invoked Function Expresion

(function chai() {
  console.log("IFFE Hai YE !");
})();
// ("this is the first praenthisis is where we write function defination")("This is for execution call")

//Now, with arrow function
const coffee = (() => {
  //named IFFE hai ye
  console.log("DB Connected !");
})();

((name) => {
  //unnamed IFFE hai ye
  console.log(`Hello ! ${name}`);
})("aniket");

// global scope causes pollution in some function so to fix it we use IFFE

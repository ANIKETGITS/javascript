//this keyword tells about current context

const user = {
  username: "aniket",
  Price: "free",
  welcomeMsg: function () {
    console.log(`${this.username}, welcome to Website...!`);
  },
  productLisence: function () {
    console.log(`You Have Got Product licence ${this.Price}`);
  },
};
// user.welcomeMsg();
// user.productLisence();
// user.username = "Shubham";
// user.welcomeMsg();

console.log(this); // Here it gives us empty because we are in node environoment

//And In browser we have window object when we `console.log(this)` in brower

// <--prerequesit

//case:I
// function chai() {
//   let username = "aniket";
//   console.log(this.username); //it only works for object
// }
// chai();

//case:II
//what if with variable ==>
// const chai = function () {
//   let username = "aniket";
//   console.log(this.username); //it only works for object
// };
// chai();

//case:III

// const chai = () => {
// let username = "aniket";
// console.log(this.username);
// console.log(this);
// };
// chai();
//In above casees we got undefined values

//explicit return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 6));
//Curly braces '{}' -->have to Write return keyword
//implicit return
//no need to write return keyword
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 6));

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 6));

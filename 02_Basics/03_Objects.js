//Singleton

//Object Literals
const symb = Symbol("Key1");

const obj = {
  name: "aniket",
  "full name": "Aniket Rajmane",
  symb: "mykey1",
  [symb]: "the real symbol mykey2",
  Age: 21,
  Location: "Pune",
  Email: "rajaniketw2w@gamil.com",
  isLoggedIn: false,
  lastLoginDays: ["Mon", "Tue"],
};

//How to Access Object Elements

//Access Methods

//Both Methods Must Have To Know
// console.log(obj.Email);
// console.log(obj["full name"]); //This Is How To Access String Key Value Of Object
//Both Methods Must Have To Know

// console.log(obj.symb);
// console.log(typeof obj.symb); //Here it returns type is string

// console.log(obj[symb]);
// console.log(typeof obj[symb]);

//Overwrite Values of objects

obj.Email = "aniket@github.com";
// console.log(obj.Email);

// In some case u want to Freze changing of Values ==>
// Object.freeze(obj); //value dont propagate after this freezing
obj.Email = "aniket.@microsoft.com";
// console.log(obj);

obj.greatings = function () {
  console.log("hello!");
};
console.log(obj.greatings());

//How to Access Inner Properties Of Object
obj.greatings2 = function () {
  console.log(`hello js User,${this.name}`);
};
console.log(obj.greatings2());

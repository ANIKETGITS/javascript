//singleton

const tinderUser = {};

tinderUser.id = 123;

tinderUser.name = "aniket";
tinderUser.fullname = ["firstname"];
tinderUser.email = "rajaniket@gmail.com";
tinderUser.isloggedIn = false;

// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isloggedIn"));
 


// Object Destructuring 
const courses = {
     courseName: "Js In Hindi",
     Instructor: "Aniket",
     Price: "free"
}
//1st Method
// courses.Instructor() 

//2nd Method
const { Instructor } = courses;
// console.log(Instructor);

// ======================Json Api============================
// API is Like A Menu Card (Documentation Of Api) Of Restaurent You'll Just Order What You Want to (Eat) use Instead Of Worrying About Its Making Procedure

//The Use Of API Values In Backend
//=========================== Temporal API ===============================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal -->For Date And Time

// ==============Existing Method Now In Js ================================
// =====Date=====>

const todayDate = new Date();
console.log(todayDate);
console.log(todayDate.toString());
console.log(todayDate.toISOString());
console.log(todayDate.toLocaleString());
console.log(todayDate.toUTCString());
console.log(typeof todayDate);

let createdDate = new Date(2025, 0, 24);
let createdDate2 = new Date(2025, 0, 24, 5, 30, 15, 0.5);
console.log(createdDate.toString());
console.log(createdDate2.toLocaleString());
let createdDate3 = new Date("01-13-2025");
console.log(createdDate3.toLocaleString());

// <=====Date=====

// =====TimeStamp=====>

let getTimeStamp = Date.now();
console.log(getTimeStamp); // -mileseconds
console.log(createdDate.getTime()); //<-mileseconds
console.log(Math.floor(Date.now() / 100000000000));

// <=====TimeStamp=====

// ========>Use Case
let newDate = new Date(2025, 0, 24, 5, 30);
console.log(
  `Today Date is ${newDate.getDate()} and day is ${newDate
    .getDay() //Get Only Number Of The Week(0 to 6)
    .toLocaleString()} Year ${newDate.getFullYear()}`
);

//Get Weekday Not Just a Number
const Weekday = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
console.log(
  `Today Date is ${newDate.getDate()} and day is ${Weekday[
    newDate.getDay()
  ].toLocaleString()} Year ${newDate.getFullYear()} , Time is ${newDate
    .getTime()
    .toLocaleString()}`
);
// <========Use Case

// ==============Existing Method Now In Js ================================

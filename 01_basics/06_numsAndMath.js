let points = new Number(243);

// console.log(points.toFixed(2));
// console.log(typeof (points).toPrecision());
// console.log(points.toString());

// *************************Math***************************
// console.log(Math);
let nonabsValue = new Number(-3);
console.log(Math.round(4.6));
console.log(Math.floor(4.6));

// console.log(`This is Absolute Value Example=> ${Math.abs( -4)}`);

let max = new Number(50);
let min = new Number(20);

// console.log(Math.random());
// console.log(Math.floor(Math.random()*100+1));
console.log(Math.floor(Math.random() * (max - min + 1) + min));

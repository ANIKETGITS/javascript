// array

const arry1 = Array(1, 2, 3, 3);
const arry2 = Array(122, 23, [234, 232, [323, 246]]);

const newBigArry = Array(arry1, arry2);
console.log(newBigArry.flat(Infinity));

const arryStr = arry1.join();
console.log(arryStr);

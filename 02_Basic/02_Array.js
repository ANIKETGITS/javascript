const marval_Heros = Array("SpiderMan", "Hulk", "Thor", "Iron-Man");
const dc_Heros = Array("Batman", "SuperMan", "Flash", "Wander-Women");

// marval_Heros.push(dc_Heros); //Array Pushed in Another Array Acts as Element Of That Array Which itself is Array (single elemnent of array)

console.log(marval_Heros);
console.log(marval_Heros[4][1]); //To Access Element of array of an array element

// 2nd Method

const allHeors = marval_Heros.concat(dc_Heros);

console.log(allHeors);

// 3rd Method

const all_New_Heros = [...marval_Heros, ...dc_Heros]; //Most Prefer
console.log(all_New_Heros);

//rare method
const anotherArry = [1, 2, 3, [4, 5, 6], 7, [8, [9, 5]]];

const newAnotherArry = anotherArry.flat(Infinity); //Give Depth (Here Infinity)
console.log(newAnotherArry);

//Data Scraping

// console.log(Array.isArray("aniket")); //To Convert This Into Array ==>
// console.log(Array.from("aniket"));
// console.log(Array.from({name:"aniket"}));// Interesting Que On This ==>It Gives U An Empty Array When It Unable To Convert Array U Should Have to Give Proper Query to convert What a value or object into array for this

//Diffrent Case (which returns new array from Set of elements)
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); 

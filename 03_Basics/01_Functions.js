// Function Is Nothing But A Bloc Of Code Can Be Called Any Where Any Time Runtime

function callMyName() {
  console.log("aniket");
  console.log("aniket");
  console.log("aniket");
  console.log("aniket");
  console.log("aniket");
}

// callMyName();

//Parameters And Arguements

function addtionTwoNumbs(Num1, Num2) {
//   console.log(Num1 + Num2);
}

//Here (Num1, Num2) Are Parameters Of A Function

// addtionTwoNumbs(3, 68); //These Are Arguements /values


//Can You Store Output Like This -->
const results = addtionTwoNumbs(2, 5);
// console.log(results);

//Answer is No..! You Can't It results in undefined
//So How -->
function storeAddtionTwoNum(Num1, Num2) {
     let result = Num1 + Num2;
     return result
}
const result = storeAddtionTwoNum(2, 5);

// console.log("Results: ",result);



function loginUserMessage(username) {

     if (!username) {
          console.log("please enter user name:");
          return
     }
     return `${username} Just Logged In`
}

loginUserMessage("aniket")
//If You Tried Like These It Will Doesn't print The value
//So Use Console.log()
// console.log(loginUserMessage());

// function with objects

// function calculateCartPrice(num1) {
//      return num1;
// }

// console.log(calculateCartPrice(2))


//rest operator

function calculateCartPrice(...num1) {
        return num1;
}

// console.log(calculateCartPrice(299,3424,2343224,));


//what if

function storeMultiParaVals(val1, val2, ...nw1){
     return nw1
}

console.log(storeMultiParaVals(200,300,2309,2349));

const mynewArry =[234,2545,565]

function secondValue(getArry) {
     return getArry[1]
     
}

console.log(secondValue(mynewArry));

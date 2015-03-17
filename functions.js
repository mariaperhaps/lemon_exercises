// //define a function maxTwo that takes two arguments and returns the larger of two numbers.Log your answer to the console.

// var maxTwo = function(num1, num2){
//   if(num1 > num2){
//     return num1
//   } else {
//     return num2
//   }
// }

// var answer = maxTwo(4,2)
// console.log(answer)

// //define a function maxThree that takes three arguments returns the larger of three numbers.Log your answer to the console.

// var maxThree = function(num1, num2, num3){
//   if(num1 > num2 && num1 > num3){
//     return num1
//   } else if(num2 > num1 && num2 > num3){
//     return num2
//   } else {
//     return num3
//   }
// }

// var answer = maxThree(7,5,1)
// console.log(answer)

// //define a funtion sumOfEvens that takes an array as an argument and returns the sum of all the even numbers.
// //for example, sumOfEvens([1,2,3,4]) should return 6. Log your answer to the console.

// var sumOfEvens = function(array){
//   sum = 0
//   for(var i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//       sum += array[i]
//     }
//   }
//   return sum
// }

// var answer = sumOfEvens([2,3,4,5,6])
// console.log(answer)

// //define a function longestWord that takes an array of strings as an argument and returns the longest word. Log your answer to the console.

// var longestWord = function(array){
//   var longestWord = ""
//   for(var i = 0; i < array.length; i++){
//     if(array[i].length > longestWord.length){
//       longestWord = array[i]
//     }
//   }
//   return longestWord
// }


// var answer = longestWord(["you", "look", "fabulous",])
// console.log(answer)


//######################################
//Named function vs. Anonymous Function
//######################################


//Error
// console.log(functionOne())

var functionOne = function() {
    return 1 + 1
};

//Will run
console.log(functionTwo())

function functionTwo() {
    return 1 + 1
}

//#################################################
//Functions Give us Access to the Arguments Array
//#################################################

var arguments = function(){
  for(var i = 0; i < arguments.length; i++){
    return arguments[i]
  }
}

console.log(arguments(4,5,6,2,3))


var sum = function () {
  var sum = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  return sum;
};

console.log(sum(2,4,5,6,1,9))

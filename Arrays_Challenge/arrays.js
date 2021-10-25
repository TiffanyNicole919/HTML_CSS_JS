//Write a function that is given an array and each time the value is "food" it should console log "yummy".
//If "food" was not present in the array console log "I'm hungry" once


//function alwaysHungry(arr) {
    //var foodSum = 0;
	//for(var i = 0; i<arr.length; i++) {
		//if(arr[i] == "food") {
			//console.log("yummy")
			//foodSum++
		//}
	//}
	//if(foodSum == 0) {
		//console.log("I'm hungry")
	//}
//}
   
//alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
//alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



//Given an array and a value cutoff, return a new array containing only the values larger than cutoff.


//function highPass(arr, cutoff) {
    //var filteredArr = [6, 8, 10, 9];
    //for(var i = 0; i<arr.legnth; i++) {
		//if(arr[i] > cutoff) {
			//filteredArr.push(arr[i])
		//}
	//}
    //return filteredArr;
//}
//var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//console.log(result); 



//Given an array of numbers return a count of how many of the numbers are larger than the average.
//function betterThanAverage(grade) {
    //var sum = 0;
    //for(var i = 0; i<grade.length; i++) {
		//sum += grade[i]
	//}

	//var avg = sum / grade.length
	//var total = 0

	//for(var i = 0; i<grade.length; i++) {
		//if(grade[i] > avg) {
			//total++
		//}
	//}
    
    //return total;
//}
//var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result);


//Write a function that will reverse the values an array and return them.

//function reverseArr(arr) {
    //for(i = 0; i < arr.length/2; i++) {
		//temp = arr[i]
		//arr[i]= arr[arr.length-1-i]
		//arr[arr.length-1-i] = temp
	//}
    //return arr;
//}
   
//let result = reverseArr(["a", "b", "c", "d", "e"]);
//console.log(result); 




//Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.


function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n) {
		var x = fibArr[fibArr.length - 1]
		var y = fibArr[fibArr.length - 2]
		fibArr.push(x + y)
	}
    return fibArr;
}


var result = fibonacciArray(10);
console.log(result); 


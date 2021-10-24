//function alwaysHungry(arr) {
	//([5, "food", "cake", true, "food"])
//}
   
//alwaysHungry([3.14, "food", "pie", true, "food"]);
//console.log("yummy", "yummy")
//alwaysHungry([4, 1, 5, 7, 2]);
//console.log("I'm", "hungry")
//{
//}

//function highPass(arr, cutoff) {
    //var filteredArr = [6, 8, 10, 9];
    
    //return filteredArr;
//}
//var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//console.log(result); 


//function betterThanAverage(arr) {
    //var sum = 0;
    
    //var count = 0
    // count how many values are greated than the average
    //return count;
//}
//var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result); // we expect back 4


function reverseArr(arr) {
    for (i = 0; i< arr.length/2; i++)
	temp= arr[i]
	//console.log(temp);
	arr[i]= arr[arr.length-1-i] = temp 
	//console.log(temp);
	}
	return arr;
{

let result = reverseArr(["a", "b", "c", "d", "e"]);
console.log(result);
	}
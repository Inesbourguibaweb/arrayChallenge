// Always Hungry
function alwaysHungry(arr) {
    for (i=0; i< arr.length; i++){
        if (arr[i]=="food"){
            console.log("yummy")
        } 
    }
    bool= arr.includes('food');
    if (bool==false){
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i< arr.length; i++){
        if(arr[i]>cutoff) {
            filteredArr.push(arr[i]);
    }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Better than average
function betterThanAverage(arr) {
    // calculate the average
    var sum = 0;
    var initialValue = 0;
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
        initialValue);
    var average= sum/arr.length;
    // count how many values are greated than the average
    var count = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>average){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Array Reverse
function reverse(arr) {
    arr.reverse();
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(var i=1; i<(n-1);i++){
        sum=fibArr[i]+fibArr[i-1];
        fibArr.push(sum);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

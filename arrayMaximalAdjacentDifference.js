// Given an array of integers, 
// find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(arr) {
    return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])))
}

// Two arrays are called similar 
// if one can be obtained from another 
// by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function areSimilar(arr1, arr2) {
    let a=arr1.filter((e,i)=>e!=arr2[i])
    let b=arr2.filter((e,i)=>e!=arr1[i])
    
    return a.length===0||a.length===2&&a.join("")===b.reverse().join("")
}

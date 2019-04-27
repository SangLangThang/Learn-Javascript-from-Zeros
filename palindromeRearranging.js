// Given a string, find out if its characters can be rearranged to form a palindrome

function palindromeRearranging(a) {
    let countedNames = Object.values(a.split("").reduce(function (allNames, name) { 
      if (name in allNames) {
        allNames[name]++;
      }
      else {
        allNames[name] = 1;
      }
      return allNames;
    }, {})).filter(e=>e%2!=0).length;
      
    if(a.length%2===0&&countedNames===0) return true
    if(a.length%2!=0&&countedNames===1) return true
    return false
    }
    


function dif_palindromeRearranging(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2; 
}
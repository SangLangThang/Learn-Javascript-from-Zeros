// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

//My solve
function isMyLucky(n) {
    let myN=""+n;
    let first=0;
    let second=0
    if(myN.length%2!=0){return false}
    for(let i=0;i<myN.length/2;i++){
        first+=Number(myN[i])
        second+=Number(myN[myN.length/2+i])
    }
    return first===second?true:false
}
//Our solve
function isOurLucky(n) {
    var a=(n+"").split(""),half=a.length/2,l=0,r=0
    while(a.length>half) r+= +a.pop()
    while(a.length) l+= +a.pop()
    return l===r
  }

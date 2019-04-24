

//Some people are standing in a row in a park. There are trees between them which cannot be moved. 
//Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
//People can be very tall!
function mySortByHeight(a) {
    let pos=[];
    a.forEach((e,index)=>{
        if(e===-1){
            pos.push(index)
        }
    })
    let realNumber=a.filter(e=>e!=-1).sort((a,b)=> a-b);
    console.log(realNumber)
    let result=Array.from(a).fill(0)
    let k=0;
    for(let i=0;i<a.length;i++){
      if(pos.includes(i)){
          result[i]=-1
      }
      else{
        result[i]=realNumber[k];
        k++
      }
    }
    return result
}

function sortByHeight(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }
        
        return -1;
    })
}

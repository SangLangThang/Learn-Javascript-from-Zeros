// Given a string s consisting of small English letters, 
// find and return the first instance of a non-repeating character in it. 
// If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
    let a=s.split("")
    for(let i=0;i<a.length;i++){
        if(a.indexOf(a[i])===a.lastIndexOf(a[i])) return a[i]
    }
    return "_"
}

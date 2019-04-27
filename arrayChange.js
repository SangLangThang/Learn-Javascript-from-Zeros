// You are given an array of integers. 
// On each move you are allowed to increase exactly one of its element by one. 
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
function arrayChange(a) {
    let max = a[0], count = 0;
    for (let i = 1; i < a.length; i++) {
        if (max >= a[i]) {
            count += max - a[i] + 1;
            max += 1

        }
        else {
            max = a[i]
        }

    }
    return count
}

// You are given an n x n 2D matrix that represents an image. 
// Rotate the image by 90 degrees (clockwise).

function rotateImage(c) {
    let a=[...c]
    
    let N=a[0].length
    for (let i = 0; i < N / 2; i++) { 
        for (let j = i; j < N - i - 1; j++) { 
  
            // Swap elements of each cycle 
            // in clockwise direction 
            let temp = a[i][j]; 
            a[i][j] = a[N - 1 - j][i]; 
            a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j]; 
            a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i]; 
            a[j][N - 1 - i] = temp; 
        } 
    } 
    return a
}

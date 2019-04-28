// Sudoku is a number-placement puzzle. 
// The objective is to fill a 9 × 9 grid with numbers in such a way 
// that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. 
// Note that the puzzle represented by grid does not have to be solvable.

function sudoku2(grid) {
    let arr=copyGrid(grid)
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if(arr[i][j]!=0){
              
              if(!check_location_is_safe(arr, i, j, arr[i][j])) return false
            }
        }
    }
    return true

}
function copyGrid(grid){
  let b=[...grid]
  for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (b[i][j]===".") {
                b[i][j]=0
            }
        }
    }
    return b
}



//find number already in row, if have return true
function used_in_row(arr, row, num) {
    let k=0;
    for (var i = 0; i < 9; i++) {
        if (arr[row][i] == num) {
            k++
        }
    }
    return k>1?true:false
}
//find number already in cell, if have return true
function used_in_col(arr, col, num) {
    let k=0;
    for (var i = 0; i < 9; i++) {
        if (arr[i][col] == num) {
            k++
        }
    }
    return k>1?true:false
}
//find number already in box, if have return true
function used_in_box(arr, row, col, num) {
  let k=0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (arr[i + row][j + col] == num) {
                k++
            }
        }
    }
    return k>1?true:false
}

function check_location_is_safe(arr, row, col, num) {
    return !used_in_row(arr, row, num) && !used_in_col(arr, col, num) && !used_in_box(arr, row - row % 3, col - col % 3, num);
}
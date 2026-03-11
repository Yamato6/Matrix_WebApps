// Jeshua Abraham Perez Diaz TDSM4A
//Create a function to print a matrix
//example:
//printMatrix(2)
//output:
// [0,0] [0,1]
// [1,0] [1,1]

function printMatrix(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "[" + i + "," + j + "] ";
    }
    console.log(row);
  }
}

printMatrix(3);
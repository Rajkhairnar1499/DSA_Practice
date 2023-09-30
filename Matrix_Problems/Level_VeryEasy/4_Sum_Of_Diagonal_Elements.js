


function sumDiagonalElements(matrix) {
    
    //Method 1 
    // Time Complexity =  O(N); 
    // Space Complexity = O(1);
    // let sum = 0;
    // let n = matrix.length;
    // for(let i = 0; i < n; i++) {
    //     // sum = sum + matrix[i][i];// Diagonal 1
    //     sum = sum + matrix[i][i] + matrix[i][n-i-1];// Diagonal 1 + Diagonal 2
    //     // sum = sum + matrix[i][n-i-1]; //Diagonal 2
    // }
    // return sum;

    //Method 2
    // Time Complexity =  O(N*N); 
    // Space Complexity = O(1);
    /*let Diagonal1 = 0;
    let Diagonal2 = 0;
    let n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {

            //Condition for Diagonal 1
            if(i == j) 
                Diagonal1 += matrix[i][i];

            //Condition for Diagonal 2
            if((i + j) == (n - 1))
                Diagonal2 += matrix[i][n-i-1];
        }
    }
    return Diagonal1 + Diagonal2;*/
}

//Example Usage
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let diagonalSum = sumDiagonalElements(matrix);
console.log(diagonalSum);








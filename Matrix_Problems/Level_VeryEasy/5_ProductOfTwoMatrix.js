//Method-1A use for same size of the matrix and same length of rows or column
// function multiplyMatrices(matrix1, matrix2) {

//     let result = [];
//     for (let i = 0; i < matrix1.length; i++) {
//         let row = [];

//         for (let j = 0; j < matrix2[0].length; j++) {
//             let sum = 0;

//             for( let k = 0; k < matrix1[0].length; k++) {
//                 sum += matrix1[i][k] *  matrix2[k][j];
//             }
//             row.push(sum);
//         }
//         result.push(row); 
//     }
//     return result;
// }


//Example Usage

// let matrix1 = [
//     [1, 2],
//     [3, 4]
// ];

// let matrix2 = [
//     [5, 6],
//     [7, 8]
// ]; // Output : [ [ 19, 22 ], [ 43, 50 ] ]

// const matrix1 = [
//     [1, 2, 3], 
//     [4, 5]
// ];
// const matrix2 = [
//     [8, 9],
//     [7, 8, 9],
//     [1, 2]
// ];// Output : [ [ 25, 31 ], [ NaN, NaN ] ]


// let productOfMatrix = multiplyMatrices(matrix1, matrix2);
// console.log(productOfMatrix);



//Method-2 
// function multiplicationMatrices(matrix1, matrix2) {
//     //Check if the matrices have compatible dimensions.
//     if (matrix1[0].length !== matrix2.length) {
//         throw new Error ("The two matrices must have the same no of columns..");
//     }

//     //Create a new matrix to store the result.
//     const result = [];
//     for (let i = 0; i < matrix1.length; i++) {
//         result.push([]);

//         for(let j = 0; j < matrix2[0].length; j++) {
//             result[i][j] = 0;

//             //Calculate the element at row i, column j of the result matrix
//             for (let k = 0; k < matrix1[0].length; k++) {
//                 result[i][j] += matrix1[i][k] + matrix2[k][j];
//             }
//         }
//     }
//     return result;
// }

 

//Example Usage

// let matrix1 = [
//     [1, 2],
//     [3, 4]
// ];

// let matrix2 = [
//     [5, 6],
//     [7, 8]
// ]; // Output : [ [ 15, 17 ], [ 19, 21 ] ]

// const matrix1 = [
//     [1, 2, 3], 
//     [4, 5]
// ];
// const matrix2 = [
//     [8, 9],
//     [7, 8, 9],
//     [1, 2]
// ];
// Output : [ [ 22, 25 ], [ NaN, NaN ] ]

// let productMatrix = multiplyMatrices(matrix1, matrix2);
// console.log(productMatrix); 


//Method-1B 
function multiplyMatrices(matrixA, matrixB) {
    let result = [];
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;
            for (let k = 0; k < colsA; k++) {
                if (matrixA[i][k] !== undefined && matrixB[k][j] !== undefined) {
                    result[i][j] += matrixA[i][k] * matrixB[k][j];
                }
            }
        }
    }

    return result;
}

//Example Usage

// let matrix1 = [
//     [1, 2],
//     [3, 4]
// ];

// let matrix2 = [
//     [5, 6],
//     [7, 8]
// ]; //Output : [ [ 19, 22 ], [ 43, 50 ] ]


// const matrix1 = [
//     [1, 2, 3], 
//     [4, 5]
// ];
// const matrix2 = [
//     [8, 9],
//     [7, 8, 9],
//     [1, 2]
// ]; // Output : [ [ 25, 31 ], [ 67, 76 ] ]

// let productMatrix = multiplyMatrices(matrix1, matrix2);
// console.log(productMatrix);





  










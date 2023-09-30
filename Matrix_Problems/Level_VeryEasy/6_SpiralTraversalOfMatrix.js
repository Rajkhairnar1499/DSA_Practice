function spiralTransversal(matrix) {
    let result = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0, bottom = m - 1, left = 0, right = n - 1;

    while( top <= bottom && left <= right) {
        //Traverse  top row 
        for(let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        //Traverse right column
        for(let i = top; i <= bottom; i++){
            result.push(matrix[i][right]);
        }
        right--;

        //Traverse bottom row
        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
        }
        bottom--;

        //Traverse left column
        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
        }
        left++;

        
    }
    return result;
    
}

//Example Usage

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let spiralOrder = spiralTransversal(matrix);
console.log(spiralOrder);






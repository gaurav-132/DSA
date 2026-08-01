var setZeroes = function(matrix) {
    
    let rowFlag = false;

    for(let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        for(let j = 0; j < row.length; j++){
            if(row[j] === 0){
                rowFlag = true;
                row[j] = -1;
            }
        }

    }

    console.log(rows);

    for(row of rows){
        for(let i = 0; i < matrix[row].length; i++){
            matrix[row][i] = 0;
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let col of cols){
            matrix[i][col] = 0;
        }
    }
};


let matrix = [[1,1,1],[1,0,1],[1,1,1]];

setZeroes(matrix);

console.log(matrix);
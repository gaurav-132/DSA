

var solveSudoku = function(board) {
    
    let modifyingRow = [];

    function fillNo (row, col){
        if(row === 9) {
            return true;
        };

        
        if(row < 9 && col === 9){
            row += 1;
            col = 0;
            return fillNo(row, col);;
        }
        

        if(board[row][col] !== "."){
            return fillNo(row, col+1);
        }else{

            for(let no = 1; no < 10; no++){
                
                if(isValid(row, col, board, no)){
                    board[row][col] = String(no);

                    let isSolved = fillNo(row, col+1);
                    
                    if(isSolved){
                        return true;
                    } else{
                        board[row][col] = ".";
                    }

                }
    
            }

            return false;
        }

    }

    fillNo(0, 0, board, modifyingRow);
    
};  

function isValid(row, col, board, no){
    
    //col scanning
    for (let i = 0; i < board[row].length; i++) {
        if(board[row][i] == no){
            return false
        }
        
    }

    //all rows scanning
    for(let i = 0; i < 9; i++){
        if(board[i][col] == no){
            return false;
        }
    }

   
    
    let gridRow = Math.floor(row / 3) * 3;
    let gridCol = Math.floor(col / 3) * 3;
    


    for (let i = gridRow; i <= gridRow + 2; i++) {
        for (let j = gridCol; j <= gridCol + 2; j++) {
            if(board[i][j] == no) return false;
        }
    }

    return true;

}


let board = [["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

solveSudoku(board);

console.log(board);
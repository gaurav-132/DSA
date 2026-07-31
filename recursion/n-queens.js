var solveNQueens = function(n) {
    let result = [];
    let currentComb = [];
    let currentStrComb = [];
    let str;
    function backtrack(row){

        if(row === n){
            return;
        }
        for(let i = 0; i < n; i++){
            if(isSafe(i, currentComb)){
                str = createStr(i, n);
                currentComb.push(i);
                currentStrComb.push(str);
                backtrack(row + 1);
                if(currentStrComb.length === n){
                    result.push([...currentStrComb]);
                }
                currentComb.pop();
                currentStrComb.pop();
            }
        }

    }

    
    backtrack(0);
    
    
    return result;
};

function isSafe(col, currentComb){

    let i = currentComb.length - 1;
    let currentRow = currentComb.length;

    while(i >= 0){
        if(currentComb[i] === col) return false;


        if(
            (col - (currentRow - i)) === currentComb[i] ||
            (col + (currentRow - i)) === currentComb[i]
        ) return false;

        i--;
    }   

    return true;
}


function createStr(placeItem, size){
    let str = "";

    for(let i = 0; i < size; i++){
        if(i === placeItem){
            str += "Q";
        }else{
            str += "."
        }
    }

    return str;
}


let n = 4;

console.log(solveNQueens(n));
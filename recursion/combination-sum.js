

    function checkSum(currentSum, currentIdx, currentComb, target, candidates, possibleCombinations){

        if(currentIdx === candidates.length){
            return;
        }
        
        currentSum += candidates[currentIdx];
        

        console.log(
        "ENTER",
        "sum =", currentSum,
        "idx =", currentIdx,
        "comb =", [...currentComb]
        );
        
        
        if(currentSum === target){
            console.log("hello", target, currentComb, candidates[currentIdx])
            currentComb.push(candidates[currentIdx]);
            possibleCombinations.push([...currentComb]);
            currentComb.pop()
            currentSum -= candidates[currentIdx];
            checkSum(currentSum, currentIdx + 1, currentComb, target, candidates, possibleCombinations)
            
            return;
        }else if(currentSum > target){      
            // curr  
            currentSum -= candidates[currentIdx];
            checkSum(currentSum, currentIdx + 1, currentComb, target, candidates, possibleCombinations)
            return;
        }
        
        currentComb.push(candidates[currentIdx]);

        checkSum(currentSum, currentIdx, currentComb, target, candidates, possibleCombinations)
        
        currentComb.pop();
        currentSum -= candidates[currentIdx];
        
        checkSum(currentSum, currentIdx+1, currentComb, target, candidates, possibleCombinations)

    }





var combinationSum = function(candidates, target) {
    let possibleCombinations = [];

    let currentComb = [];
    let currentSum = 0;
    let currentIdx = 0

    checkSum(currentSum, currentIdx, currentComb, target, candidates, possibleCombinations)
    
    return possibleCombinations;
};

// let candidates = [2,3,6,7];
// let target = 7;

// let candidates = [2,3,5];
// let target = 8;

// let candidates = [2,3,5]
// let target = 10

// let candidates = [3,4,5]
// let target = 9

// let candidates = [8,7,4,3]
// let target = 11


let candidates  = [4,2,8];
let target = 8

console.log(combinationSum(candidates,target));
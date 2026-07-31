var combinationSum2 = function(candidates, target) {
    let result = [];
    let currentComb = [];
    candidates.sort((a,b) => a - b);
    
    function backtrack(start, currentSum) {

        if (currentSum === target){
            result.push([...currentComb]);
            return;
        };


        for (let i = start; i < candidates.length; i++) {

            while (i != start && candidates[i] == candidates[i-1]){
                i++;
            }
            if (currentSum + candidates[i] > target) break; 
            currentSum += candidates[i];
            currentComb.push(candidates[i]);
            backtrack(i+1, currentSum);
            currentSum -= candidates[i];
            currentComb.pop();
        }
    }


    backtrack(0, 0);

    return result;
};

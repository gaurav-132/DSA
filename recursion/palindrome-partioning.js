var partition = function(s) {
    let result = [];
    let currentPartition = [];
    let currentArr = [];
    
    function backtrack(start){
        
        if(start === s.length){
            if(currentArr.length != 0){
                result.push([...currentArr]);
            }
            return;
        }

        
        let currentStr = "";

        for (let i = start; i < s.length; i++) {
            currentStr = s.slice(start, i + 1);
            
            if(isPalindrome(currentStr)){
                currentArr.push(currentStr)
                backtrack(i + 1);
                currentArr.pop();
            }

        }   

    
        // currentArr = [];
    }

    backtrack(0);


    return result;
};


function isPalindrome (str){
    let start = 0;
    let end = str.length - 1;

    while(start < end){
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }

    return true;
}

let s = "aaab";
// let s = "cdd";


console.log(partition(s));
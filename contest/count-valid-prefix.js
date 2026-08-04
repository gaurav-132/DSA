function countZeroAndOne(str){
    let zeroCount = 0;
    let oneCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] == 0){
            zeroCount++;
        }else{
            oneCount++;
        }
    }
    
    return [zeroCount, oneCount];
};


var countValidPrefixes = function(s) {
   
    let subStr = "";
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        subStr = s.slice(0,i+1);
        console.log(subStr);
        let [zeroCount, oneCount] = countZeroAndOne(subStr);

        if(Math.abs(zeroCount - oneCount) <= 1){
            count++;
        }
    }

    return count;
}


// let s = "00101";
// let s = "101";
let s= "11"
console.log(countValidPrefixes(s))
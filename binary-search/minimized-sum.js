function canDistribute(k, quantities, n){
    let noOfSteps = 0;

    for(let i = 0; i < quantities.length; i++){

        if(quantities[i] % k === 0) {
            noOfSteps += Math.floor(quantities[i] / k);
        }else{
            noOfSteps += Math.floor(quantities[i] / k) + 1;
        }

        if (noOfSteps > n) return false;
    }

    return true;
}

var minimizedMaximum = function(n, quantities) {
    let low = 1;
    let high = Math.max(...quantities);
    let mid;
    
    while(low < high){
        mid = Math.floor((low + high) / 2);

        if(canDistribute(mid, quantities, n)){
            high = mid;
        }else{
            low = mid + 1;
        }
    }

    return low;
};



// let n = 6;
// let quantities = [11,6];
// let n = 7;
// let quantities = [15,10,10];
let n = 1
let quantities = [100000]

console.log(minimizedMaximum(n, quantities))
function findPower(x, n) {
    if(n === 1){
        return x;
    }

    if(n === 0){
        return 1;
    }


    return n  % 2 === 0 ? findPower(x, Math.trunc(n/2)) ** 2 : (findPower(x, Math.trunc(n/2)) ** 2) *x; 
}

var myPow = function(x, n) {
    let number = findPower(x, n);

    console.log("Number Returned",number);



    return n < 0 ? 1 / number : number;
};


let x = 2
// let n = -200000000
let n = -2

console.log(myPow(x,n));
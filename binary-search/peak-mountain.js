var peakIndexInMountainArray = function(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid; 

// console.log(high)

    while(low < high){
        mid = Math.floor((low + high) / 2);

        
        if(arr[mid] < arr[mid + 1]){
            low = mid + 1;
        }else{
            high = mid
        }
    }

    return low;
};



// let  arr = [0,1,0];
// let arr = [0,2,1,0];
// let  arr = [0,10,5,2];
// let arr = [1, 3, 5, 4, 2]
let arr =[3, 5, 8, 12, 15, 14, 10, 7, 2];
console.log(peakIndexInMountainArray(arr));